require([
      'js/BNSymbol',
      'js/BNUtil',
      'js/BNFactory',
      'js/BNEdit',
      'js/BNWindow',
      'esri/tasks/BufferParameters',
      'esri/SpatialReference',
      'esri/tasks/GeometryService',
      'esri/tasks/LengthsParameters',
      'dojo/_base/array',
      'js/jquery-3.2.1.min',
    ], (
      BNSymbol,
      BNUtil,
      BNFactory,
      BNEdit,
      BNWindow,
      BufferParameters,
      SpatialReference,
      GeometryService,
      LengthsParameters,
      arrayUtils,
    ) => {
      BNMap = new BNFactory('2707', {
        id: 'map',
        options: {
          logo: false,
          slider: false,
          isDoubleClickZoom: false,
          // minZoom: 1,
          minZoom: 3,
          maxZoom: 5,
        },
      });
    
      // 创建Geometry
      const BNGeometry = new BNFactory('BNGeometry', BNMap);
    
      //点击地图
      BNMap.InnerMap.on('click', function (e) {
    //     if (STATES.isCarClicked) {
    //       STATES.isCarClicked = false;
    //     } else {
    //       STATES.infoPanel.style.display = 'none';
    //       setCurCar({});
    //     }
        // console.log(e);
        // console.log('x:' + e.mapPoint.x + ',y:' + e.mapPoint.y);
      });
    
      BNSymbol = new BNFactory('BNSymbol', BNMap);
      BNMap.bindEvent(null, 'load', function () {
        const polygon = {
          type: 'polygon',
          rings: [
            [
              [5270965, 4057685],
              [5270965, 4057674],
              [5271429, 4057674],
              [5271429, 4057685],
            ],
          ],
        };
        const polygonSymbol = {
          type: 'esriSFS',
          style: 'esriSFSSolid',
          color: [255, 0, 0, 25.5],
          outline: {
            color: [255, 0, 0, 25.5 * 3],
            width: 1,
          },
        };
        const polygonGraphic = BNMap.graphic({
          geometry: polygon,
          symbol: polygonSymbol,
        });
        BNMap.addGraphic(polygonGraphic);
    
        const centerPoint = BNGeometry.createPoint(
          5271370,
          4057776,
          BNMap.spatialReference,
        );
        BNMap.setCenter(centerPoint);
        bNStreamLayer = new BNFactory('BNCustomStreamLayer', BNMap);
    
        bNStreamLayer.init(
          {
    //         clickFunction(graphic) {
    //           STATES.isCarClicked = true;
    //           selectCar(graphic.attributes);
    //         },
            id: 'car',
            isDefineUrl: true,
            webSocketUrl: 'ws://127.0.0.1:8095/websocket/location/aircraft',
            renderSymbols: [
              {
                field: 'vehicleNo',
                value: '民航AA7017',
                symbol: BNSymbol.PictureMarkerSymbol(
                  'E:/123/assets/vehicle.svg',
                  85,
                  32,
                ), //图片url写成自己的，不然加载不出来
                listingField: ['vehicleNo'],
              },
              {
                field: 'vehicleNo',
                value: '民航AA7018',
                symbol: BNSymbol.PictureMarkerSymbol(
                  'E:/123/assets/vehicle.svg',
                  85,
                  32,
                ), //图片url写成自己的，不然加载不出来
                listingField: ['vehicleNo'],
              },
            ],
          },
          function (data) {
    //         if (STATES.curCarInfo.vehicleNo === data.vehicleNo) {
    //           updateChart(data.speed);
    //         }
          },
          function () {
            //失败
          },
        );
      });
    });
    