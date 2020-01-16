/// <reference path="../types/index.d.ts" />

const data: Array<Ani> = [
  {
    names: [
      `ARIA The ANIMATION`,
      `The NATURAL`,
      `The OVA ARIETTA`,
      `The ORIGINATION`,
      `The AVVENIRE`,
    ],
    dates: [
      `2005.10.05`,
      `2006.04.02`,
      `2007.09.21`,
      `2008.01.07`,
      `2015.09.26`,
    ],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`Charlotte`],
    dates: [`2015.09.23`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`CLANNAD`, `CLANNAD～AFTER STORY～`],
    dates: [`2007.10.04`, `2008.10.02`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`Code Geass 反逆のルルーシュ + R2`],
    dates: [`2006.10.05`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`Gatchaman Crowds + 导演剪辑版 + insight`],
    dates: [`2013.07.12`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`K-ON！轻音少女`, `2季`, `剧场版`],
    dates: [`2009.04.02`, `2010.04.06`, `2011.12.03`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`Little Busters!`, `～Refrain～`, `EX`],
    dates: [`2012.10.06`, `2013.10.05`, `2014.01.29`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`LoveLive!`, `2季`, `剧场版`],
    dates: [`2013.01.06`, `2014.04.06`, `2015.06.13`],
    tags: [`favour`],
    rate: `S`,
  },
  { names: [`あいうら`], dates: [`2013.04.09`], tags: [`favour`], rate: `S` },
  {
    names: [
      `たまゆら(OVA)`,
      `たまゆら〜hitotose〜`,
      `たまゆら〜more aggressive〜`,
      `たまゆら～卒業写真～`,
    ],
    dates: [
      `2010.11.26 + 2010.12.23`,
      `2011.10.03`,
      `2013.07.03`,
      `2015.04.04 + 08.29 + 11.28 + 2016.04.02`,
    ],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [
      `ダンガンロンパ 希望の学園と絶望の高校生`,
      `ダンガンロンパ3 -The End of 希望ヶ峰学園-`,
    ],
    dates: [`2013.07.05`, `2016.07.11`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`ちはやふる(花牌情缘)`, `2季`, `OAD`, `+`],
    dates: [`2011.10.04`, `2013.01.11`, `2013.09.13`, `+`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`一週間フレンズ。`],
    dates: [`2014.04.06`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`东京地震8.0`],
    dates: [`2009.07.09`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`この素晴らしい世界に祝福を！ + OAD`, `2季 + OAD`],
    dates: [`2016.01.13`, `2017.01.11`],
    tags: [`favour`],
    rate: `S`,
  },
  { names: [`人渣的本愿`], dates: [`2017.01.12`], tags: [`favour`], rate: `S` },
  {
    names: [`关于完全听不懂老公在说什么的事`, `2季`],
    dates: [`2014.10.02`, `2015.04.02`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [
      `命运石之门(Steins;Gate)`,
      `负荷领域的既视感`,
      `聪明睿智的认知计算`,
      `SP(境界面上的迷失之链)`,
    ],
    dates: [`2011.04.05`, `2013.04.20`, `2014.10.15`, `2015.12.02`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`圣母在上`, `~春~`, `OVA 3rd Season`, `4th Season`],
    dates: [`2004.01.07`, `2004.07.04`, `2006.11.29`, `2009.01.03`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`変態王子と笑わない猫。`],
    dates: [`2013.04.13`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`异国迷宫的十字路口`],
    dates: [`2011.07.03`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [
      `我的青春恋爱物语果然有问题 + OVA + やはり俺の青春ラブコメはまちがっている。続`,
    ],
    dates: [`2013.04.04`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`未闻花名 + 剧场版`],
    dates: [`2011.04.14`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`機巧少女は傷つかない`],
    dates: [`2013.10.07`],
    tags: [`favour`],
    rate: `S`,
  },
  { names: [`氷菓`], dates: [`2012.04.22`], tags: [`favour`], rate: `S` },
  {
    names: [`狼与辛香料  2季`],
    dates: [`2008.01.08 + 2009.07.09`],
    tags: [`favour`],
    rate: `S`,
  },
  { names: [`白箱`], dates: [`2014.10.09`], tags: [`favour`], rate: `S` },
  {
    names: [
      `神のみぞ知るセカイ(神知)  3季 + 4人与偶像 + 天理篇 + 魔法少女☆偶像之星 加侬100%`,
    ],
    dates: [`2010.10.06`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`花开伊吕波 + Home Sweet Home（剧场版）`],
    dates: [`2011.04.03`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`苍之瞳的少女`],
    dates: [`2006.04.13`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`草莓棉花糖 + OVA`],
    dates: [`2005.07.14`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`蜂蜜与四叶草  2季`],
    dates: [`2005.04.14`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`记录的地平线  2季`],
    dates: [`2013.10.05`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`请问您今天要来点兔子吗？ + ？？`, `+`],
    dates: [`2014.04.10 + 2015.10.10`, ``],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [
      `魔法少女リリカルなのは`,
      `エース(A's)`,
      `StrikerS`,
      `The MOVIE 1st`,
      `2nd A's`,
      `ViVid`,
      `Strike! +`,
    ],
    dates: [
      `2004.10.01`,
      `2005.10.01`,
      `2007.04.01`,
      `2010.01.23`,
      `2012.07.14`,
      `2015.04.03`,
      `2016.10.02`,
    ],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`魔法少女小圆 + 新篇`],
    dates: [`2011.01.06`],
    tags: [`favour`],
    rate: `S`,
  },
  {
    names: [`女子高生の無駄づかい`],
    dates: [`2019.07.05`],
    tags: [`favour`],
    rate: `S`,
  },
  // A
  {
    names: [`ALDNOAH.ZERO`, `2季`],
    dates: [`2014.07.06`, `2015.01.10`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [
      `BLACK LAGOON`,
      `The Second Barrage`,
      `SP`,
      `Roberta’s Blood Trail`,
    ],
    dates: [`2006.04.08`, `2006.10.02`, `2009.12.23`, `2010.07.17`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`Girl Friend BETA`],
    dates: [`2014.10.12`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`KILL la KILL`], dates: [`2013.10.03`], tags: [`nice`], rate: `A` },
  {
    names: [`NO GAME NO LIFE`, `-ZERO-`],
    dates: [`2014.04.09`, `2017.07.15`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`Servant × Service(跟班×服务)`],
    dates: [`2013.07.04`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`おくさまが生徒会長！ + OAD`],
    dates: [`2015.07.01`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`ささみさん@がんばらない`],
    dates: [`2013.01.10`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`じょしらく（女子落语） + OVA`],
    dates: [`2012.07.06`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`それでも世界は美しい （尽管如此世界依然美丽）`],
    dates: [`2014.04.05`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`となりの関くん + OAD`],
    dates: [`2014.01.05`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`人類は衰退しました + SP`],
    dates: [`2012.07.01`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [
      `俺の妹がこんなに可愛いわけがない`,
      `俺の妹がこんなに可愛いわけがない。`,
    ],
    dates: [`2010.10.03`, `2013.04.06`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`六花の勇者`], dates: [`2015.07.04`], tags: [`nice`], rate: `A` },
  {
    names: [`刀剑神域`, `Extra`, `Ⅱ`, `劇場版 (-序列之争-)`, `Alicization`, `Alicization 2`],
    dates: [
      `2012.07.07`,
      `2013.12.31`,
      `2014.07.05`,
      `2017.09.15`,
      `2018.10.07`,
      `2019.10.06`,
    ],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [
      `加速世界`,
      `SP(小加速世界)`,
      `OVA(银翼的觉醒`,
      `加速的顶点)`,
      `INFINITE BURST`,
    ],
    dates: [
      `2012.04.06`,
      `2012.09.13`,
      `2013.01.31`,
      `2012.07.25`,
      `2016.07.23`,
    ],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`可塑性记忆`], dates: [`2015.04.04`], tags: [`nice`], rate: `A` },
  {
    names: [`大図書館の羊飼い`],
    dates: [`2014.10.08`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`天才麻将少女(咲-Saki-) + 阿知贺篇episode of side-A + 全国編`],
    dates: [`2009.04.05`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`寄生獣 セイの格率`],
    dates: [`2014.10.09`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`幸腹グラフィティ`],
    dates: [`2015.01.08`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`戦姫絶唱Symphogear`, `G`, `GX`, `AXZ`],
    dates: [`20120106`, `20130704`, `20150703`, `20170702`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`暗殺教室 2季`], dates: [`2015.01.09`], tags: [`nice`], rate: `A` },
  {
    names: [`未来日记 + Redial`],
    dates: [`2011.10.09`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`未確認で進行形`],
    dates: [`2014.01.08`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`漫画家与助手`], dates: [`2014.04.07`], tags: [`nice`], rate: `A` },
  {
    names: [`狗与剪刀的正确用法`],
    dates: [`2013.07.01`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`生存游戏社`], dates: [`2014.07.06`], tags: [`nice`], rate: `A` },
  {
    names: [`異能バトルは日常系のなかで(日常系的异能战斗)`],
    dates: [`2014.10.06`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`結城友奈は勇者である`],
    dates: [`2014.10.16`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`红Kure-Nai`], dates: [``], tags: [`nice`], rate: `A` },
  { names: [`绝园的暴风雨`], dates: [`2012.10.04`], tags: [`nice`], rate: `A` },
  {
    names: [`萝球社!`, `SS`],
    dates: [`2011.07.01`, `2013.07.05`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`血界戦線`], dates: [`2015.04.04`], tags: [`nice`], rate: `A` },
  { names: [`谜の彼女X`], dates: [`2012.04.07`], tags: [`nice`], rate: `A` },
  {
    names: [`路人女主的养成方法`],
    dates: [`2015.01.08`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`金色时光（青春纪行）`],
    dates: [`2013.10.03`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`魔法科高校の劣等生`, `SP 简单易懂的魔法科`, `劇場版 星を呼ぶ少女`],
    dates: [`2014.04.05`, `2014.02.22`, `2017.06.17`],
    tags: [`nice`],
    rate: `A`,
  },
  {
    names: [`龍ヶ嬢七々々の埋蔵金`],
    dates: [`2014.04.10`],
    tags: [`nice`],
    rate: `A`,
  },
  { names: [`龙与虎`], dates: [`2008.10.02`], tags: [`nice`], rate: `A` },
  { names: [`DEATH NOTE`], dates: [`2006.10.03`], tags: [`nice`], rate: `A` },
  {
    names: [`ようこそ実力至上主義の教室へ`],
    dates: [`2017.07.12`],
    tags: [`nice`],
    rate: `A`,
  },
  // B
  {
    names: [`[C]THE MONEY OF SOUL AND POSSIBILITY CONTROL`],
    dates: [`2011.04.14`],
    tags: [],
  },
  {
    names: [`A Channel + OVA + SP`],
    dates: [`2011.04.08`],
    tags: [],
  },
  {
    names: [`AIR`],
    dates: [`2005.01.06`],
    tags: [],
  },
  {
    names: [`AKB0048`, `2季`],
    dates: [`2012.04.29`, `2013.01.05`],
    tags: [],
  },
  {
    names: [`AMNESIA（失忆症）`, `SP`],
    dates: [`2013.01.08`, `2013.09.25`],
    tags: [],
  },
  {
    names: [`Angel Beats!`],
    dates: [`2010.04.02`],
    tags: [],
  },
  {
    names: [`Another`],
    dates: [`2012.01.09`],
    tags: [],
  },
  {
    names: [`Baccano! (永生之酒)`],
    dates: [`2007.07.26`],
    tags: [],
  },
  {
    names: [`BLACK CAT`],
    dates: [`2005.10.06`],
    tags: [],
  },
  {
    names: [`BLACK★ROCK SHOOTER OVA`, `BLACK★ROCK SHOOTER`],
    dates: [`2010.03.24`, `2012.02.02`],
    tags: [],
  },
  {
    names: [`BLOOD LAD（血意少年）`],
    dates: [`2013.07.07`],
    tags: [],
  },
  {
    names: [`Bonjour♪恋味パティスリー`],
    dates: [`2014.10.11`],
    tags: [],
  },
  {
    names: [`BRAVE10`],
    dates: [`2012.01.07`],
    tags: [],
  },
  {
    names: [`BTOOOM!`],
    dates: [`2012.10.04`],
    tags: [],
  },
  {
    names: [`BUDDY COMPLEX`],
    dates: [`2014.01.05`],
    tags: [],
  },
  {
    names: [`C3魔方少女`],
    dates: [`2011.10.01`],
    tags: [],
  },
  {
    names: [`Chaos Dragon 赤竜戦役`],
    dates: [`2015.07.02`],
    tags: [],
  },
  {
    names: [`Chaos;HEAD （混沌之脑） + `],
    dates: [`2008.10.09`],
    tags: [],
  },
  {
    names: [`CROSS ANGE 天使与龙的轮舞`],
    dates: [`2014.10.04`],
    tags: [],
  },
  {
    names: [`DARKER THAN BLACK 黒の契約者`, `OVA`, `流星の双子`],
    dates: [`2007.04.05`, `2010.01.27`, `2009.10.08`],
    tags: [],
  },
  {
    names: [`DOG DAYS`, `2季`, `3季`],
    dates: [`2011.04.02`, `2012.07.07`, `2015.01.10`],
    tags: [],
  },
  {
    names: [`ef - a tale of memories.（悠久之翼）`, `2季`],
    dates: [`2007.10.06`, `2008.10.06`],
    tags: [],
  },
  {
    names: [`Erog Proxy`],
    dates: [`2006.02.25`],
    tags: [],
  },
  {
    names: [`Fantasista Doll（幻想玩偶） + `],
    dates: [`2013.07.07`],
    tags: [],
  },
  {
    names: [`Fate/kaleid liner 魔法少女☆伊莉雅 + 2wei! + `],
    dates: [``],
    tags: [],
  },
  {
    names: [
      `Fate/stay night`,
      `Fate/Zero`,
      `Fate/stay night [Unlimited Blade Works]`,
    ],
    dates: [`2006.01.06`, `2011.10.01`, `2014.10.04`],
    tags: [],
  },
  {
    names: [`FORTUNE ARTERIAL 赤い約束`],
    dates: [`2010.10.09`],
    tags: [],
  },
  {
    names: [`GA 芸术科アートデザインクラス（GA艺术科美术设计班） + OVA`],
    dates: [`2009.07.06`],
    tags: [],
  },
  { names: [`GIANT KILLING（逆转监督）`], dates: [`2010.04.04`], tags: [] },
  { names: [`GJ部 + OVA`], dates: [`2013.01.09`], tags: [] },
  { names: [`GO！GO！575`], dates: [`2014.01.09`], tags: [] },
  { names: [`GOSICK`], dates: [`2011.01.07`], tags: [] },
  {
    names: [`IS〈Infinite Stratos〉`, `2季`],
    dates: [`2011.01.06`, `2013.10.03`],
    tags: [],
  },
  { names: [`ISUCA-イスカ-`], dates: [`2015.01.23`], tags: [] },
  {
    names: [`K`, `MISSING KINGS`, `RETURN OF KINGS`],
    dates: [`2012.10.04`, `2014.07.12`, `2015.10.02`],
    tags: [],
  },
  { names: [`Kanon`], dates: [`2006.10.05`], tags: [] },
  { names: [`KARNEVAL狂欢节`], dates: [`2013.04.03`], tags: [] },
  { names: [`M3 ～ソノ黒キ鋼～`], dates: [`2014.04.21`], tags: [] },
  { names: [`Million Doll`], dates: [`2015.07.06`], tags: [] },
  {
    names: [`PHI·BRAIN 神之谜题`, `2季`, `3季`],
    dates: [`2011.10.02`, `2012.04.08`, `2013.10.06`],
    tags: [],
  },
  {
    names: [`Psycho-Pass 心理测量者`, `2季`, `劇場版 PSYCHO-PASS サイコパス`],
    dates: [`2012.10.11`, `2014.10.09`, `2015.01.09`],
    tags: [],
  },
  { names: [`RDG濒危物种少女`], dates: [`2013.04.03`], tags: [] },
  {
    names: [`Re:ゼロから始める異世界生活 + SP`],
    dates: [`2016.04.04`],
    tags: [],
  },
  { names: [`S.A特优生`], dates: [`2008.04.07`], tags: [] },
  { names: [`School Days`], dates: [`2007.07.12`], tags: [] },
  {
    names: [`Selector Infected WIXOSS`, `Selector Spread WIXOSS + `],
    dates: [`2014.04.04`, `2014.10.03 + `],
    tags: [],
  },
  { names: [`Shining Tears × Wind`], dates: [`2007.04.06`], tags: [] },
  { names: [`sola + 番外編 + SP`], dates: [`2007.04.06`], tags: [] },
  {
    names: [`SOUL EATER`, `NOT!`],
    dates: [`2008.04.10`, `2014.04.08`],
    tags: [],
  },
  {
    names: [
      `To LOVEる -とらぶる-`,
      `もっとTo LOVEる ‐とらぶる‐`,
      `DARKNESS`,
      `DARKNESS 2nd`,
    ],
    dates: [`2008.04.03`, `2010.10.05`, `2012.10.05`, `2015.07.06`],
    tags: [],
  },
  { names: [`TRIGUN`], dates: [`1998.04.01`], tags: [] },
  {
    names: [
      `TRINITY SEVEN`,
      `劇場版 -悠久図書館と錬金術少女-`,
      `+ 劇場版 -天空図書館と真紅の魔王-`,
    ],
    dates: [`2014.10.07`, `2017.02.25`, `2019.03.29`],
    tags: [],
  },
  { names: [`T宝的悲惨日常 + `], dates: [``], tags: [] },
  {
    names: [`UN-GO + 日记短片 + episode:0 因果论`],
    dates: [`2011.10.13`],
    tags: [],
  },
  { names: [`VIVIDRED OPERATION`], dates: [`2013.01.10`], tags: [] },
  { names: [`Wake Up, Girls!`], dates: [`2014.01.10`], tags: [] },
  {
    names: [`Wizard Barristers弁魔士塞西尔`],
    dates: [`2014.01.12`],
    tags: [],
  },
  {
    names: [`あかね色に染まる坂`, `OVA`],
    dates: [`2008.10.02`, `2009.06.26`],
    tags: [],
  },
  {
    names: [`アカメが斬る！（斩！赤红之瞳）`],
    dates: [`2014.07.06`],
    tags: [],
  },
  { names: [`あの夏で待ってる + OVA`], dates: [`2013.01.09`], tags: [] },
  {
    names: [`いつか天魔の黒ウサギ + OAD + SP`],
    dates: [`2011.07.08 + 2011.12.05`],
    tags: [],
  },
  { names: [`しおんの王`], dates: [`2007.10.13`], tags: [] },
  { names: [`ステラ女学院高等科C³部`], dates: [`2013.07.04`], tags: [] },
  { names: [`スパイラル～推理の绊～`], dates: [`2002.10.01`], tags: [] },
  {
    names: [`ゼロの使い魔`, `～双月の騎士～`, `～三美姫の轮舞～`, `OVA`, `F`],
    dates: [
      `2006.07.02`,
      `2007.07.08`,
      `2008.07.06`,
      `2008.12.25`,
      `2012.01.07`,
    ],
    tags: [],
  },
  { names: [`ちょびっツ(chobits)`], dates: [`2002.04.02`], tags: [] },
  { names: [`とある科学の超電磁砲 + S`], dates: [`2009.10.02`], tags: [] },
  {
    names: [
      `とある魔術の禁書目録`,
      `SP`,
      `Ⅱ`,
      `恩底弥翁的奇迹(剧场版)`,
      `剧场版SP`,
      `Ⅲ`,
    ],
    dates: [
      `2008.10.04`,
      `2009.01.23`,
      `2010.10.08`,
      `2013.02.23`,
      `2013.08.28`,
      `2018.10.05`,
    ],
    tags: [],
  },
  {
    names: [`はいたい七葉`, `2季`],
    dates: [`2012.10.06`, `2013.04.06`],
    tags: [],
  },
  { names: [`はたらく魔王さま！`], dates: [`2013.04.04`], tags: [] },
  { names: [`まじっく快斗 +`], dates: [`2010.04.17`], tags: [] },
  { names: [`みなみけ 4季`], dates: [`2007.10.07`], tags: [] },
  {
    names: [
      `七つの大罪 (OAD)`,
      `聖戦の予兆(SP)`,
      `戒めの復活`,
      `劇場版 天空の囚われ人`,
    ],
    dates: [`2014.10.05`, `2016.08.28`, `2018.01.06`, `2018.08.18`],
    tags: [],
  },
  { names: [`三人行必有我妹`], dates: [`2012.07.05`], tags: [] },
  {
    names: [`下ネタという概念が存在しない退屈な世界`],
    dates: [`2015.07.04`],
    tags: [],
  },
  {
    names: [`世界征服～謀略のズヴィズダー～`],
    dates: [`2014.01.11`],
    tags: [],
  },
  { names: [`东京暗鸦`], dates: [`2013.10.08`], tags: [] },
  {
    names: [`丧女(私がモテないのはどう考えてもお前らが悪い!)`],
    dates: [`2013.07.08`],
    tags: [],
  },
  {
    names: [
      `中二病でも恋がしたい！ Lite`,
      `第一季`,
      `DEPTH OF FIELD ~ 愛と憎しみ劇場`,
      `小鸟游六花·改`,
      `戀 Lite`,
      `戀`,
      `+`,
    ],
    dates: [
      `2012.09.27`,
      `2012.10.03`,
      `2012.12.19`,
      `2013.09.14`,
      `2013.12.26`,
      `2014.01.08`,
      `+`,
    ],
    tags: [],
  },
  {
    names: [`乃木坂春香の秘密`, `purezza♪`, `Finale♪`],
    dates: [`2008.07.10`, `2009.10.05`, `2012.08.29`],
    tags: [],
  },
  { names: [`乱歩奇譚 Game of Laplace`], dates: [`2015.07.02`], tags: [] },
  {
    names: [`京騒戯画 OVA`, `WEB`, `京騒戯画`],
    dates: [`2011.12.10`, `2012.08.31`, `2013.10.02`],
    tags: [],
  },
  {
    names: [`人生相谈テレビアニメーション「人生」`],
    dates: [`2014.07.06`],
    tags: [],
  },
  { names: [`人鱼又上钩 + OAD`], dates: [`2013.04.06`], tags: [] },
  { names: [`今日的5年2班 + OVA + OAD`], dates: [`2008.10.05`], tags: [] },
  { names: [`会長はメイド様！`], dates: [`2010.04.02`], tags: [] },
  { names: [`伝説の勇者の伝説`], dates: [`2010.07.01`], tags: [] },
  {
    names: [`伪恋 + OVA`, `2季 + OVA`],
    dates: [`2014.01.11`, `2015.04.10`],
    tags: [],
  },
  { names: [`伽利略少女`], dates: [`2013.10.10`], tags: [] },
  {
    names: [`侵略！乌贼娘`, `+`],
    dates: [`2010.10.04`, `2011.09.26`],
    tags: [],
  },
  { names: [`便·当`], dates: [`2011.10.08`], tags: [] },
  { names: [`信长之枪`], dates: [`2014.01.05`], tags: [] },
  { names: [`修业魔女璐璐萌`], dates: [`2014.07.09`], tags: [] },
  {
    names: [`俺の彼女と幼なじみが修羅場すぎる`],
    dates: [`2013.01.05`],
    tags: [],
  },
  { names: [`僕だけがいない街`], dates: [`2016.01.07`], tags: [] },
  { names: [`僕らはみんな河合荘 + SP`], dates: [`2014.04.03`], tags: [] },
  { names: [`元气囝仔`], dates: [`2014.07.06`], tags: [] },
  {
    names: [`元气少女缘结神 + OVA`, `2季 + OVA`],
    dates: [`2012.10.01`, `2015.01.05`],
    tags: [],
  },
  { names: [`光明之心～幸福的面包～`], dates: [`2012.04.12`], tags: [] },
  {
    names: [
      `全金属狂潮`,
      `校园篇`,
      `The Second Raid`,
      `TSR OVA 战队长悠闲的一天`,
      `+`,
    ],
    dates: [`2002.01.08`, `2003.08.26`, `2005.07.13`, `2006.05.26`, ``],
    tags: [],
  },
  { names: [`六畳間の侵略者！？`], dates: [`2014.07.11`], tags: [] },
  {
    names: [`关于我转生变成史莱姆这档事 + OAD`, `+`],
    dates: [`2018.10.02`, `2020`],
    tags: [],
  },
  {
    names: [`最近、妹のようすがちょっとおかしいんだが。`],
    dates: [`2014.01.04`],
    tags: [],
  },
  { names: [`写真女友`], dates: [`2013.04.04`], tags: [] },
  {
    names: [`军火女王`, `2季`],
    dates: [`2012.04.10`, `2012.10.09`],
    tags: [],
  },
  { names: [`农林`], dates: [`2014.01.10`], tags: [] },
  { names: [`刀语`], dates: [`2010.01.25`], tags: [] },
  {
    names: [`创圣的大天使`, `创圣的大天使Evol`, `创圣的大天使LOGOS`],
    dates: [`2005.04.05`, `2012.01.08`, `2015.07.02`],
    tags: [],
  },
  {
    names: [`D.C. (初音岛)`, `D.C.S.S.`, `D.C.II`, `D.C.II.S.S.`, `D.C.III`],
    dates: [
      `2003.07.05`,
      `2005.07.02`,
      `2007.10.01`,
      `2008.04.05`,
      `2013.01.05`,
    ],
    tags: [],
  },
  { names: [`半妖少女绮丽谭`], dates: [`2010.10.04`], tags: [] },
  { names: [`吟游默示录 + `], dates: [`2004.11.04`], tags: [] },
  {
    names: [
      `吹响！上低音号 + SP吹奏乐部的日常(评价：如同交响乐一般的剧情)`,
      `+`,
    ],
    dates: [`2015.04.07`, ``],
    tags: [],
  },
  {
    names: [`問題児たちが異世界から来るそうですよ？`],
    dates: [`2013.01.11`],
    tags: [],
  },
  {
    names: [`噬神者 SP`, `噬神者`],
    dates: [`2015.07.05`, `2015.07.12`],
    tags: [],
  },
  { names: [`噬血狂袭`, `+`], dates: [`2013.10.04`, ``], tags: [] },
  { names: [`四月は君の嘘 + OAD`], dates: [`2014.10.09`], tags: [] },
  {
    names: [`在地下城寻求邂逅是否搞错了什么`, `2季`],
    dates: [`2015.04.03`, `2019.07.13`],
    tags: [],
  },
  { names: [`地狱幼稚园`], dates: [`2013.01.11`], tags: [] },
  { names: [`坂本ですが？`], dates: [`2016.04.07`], tags: [] },
  { names: [`城下町のダンデライオン`], dates: [`2015.07.02`], tags: [] },
  { names: [`境界のRINNE +`], dates: [``], tags: [] },
  {
    names: [`境界の彼方`, `-I'LL BE HERE-过去篇/未来篇`],
    dates: [`2013.10.02`, `2015.03.14 / 2015.04.25`],
    tags: [],
  },
  {
    names: [`境界线上的地平线`, `2季`],
    dates: [`2011.10.01`, `2012.07.07`],
    tags: [],
  },
  { names: [`夏目友人帳  +`], dates: [``], tags: [] },
  { names: [`夏色キセキ + SP`], dates: [`2012.04.05`], tags: [] },
  { names: [`夜明前的琉璃色`], dates: [`2006.10.04`], tags: [] },
  { names: [`夢喰いメリー`], dates: [`2011.01.06`], tags: [] },
  { names: [`大剑`], dates: [`2007.04.04`], tags: [] },
  { names: [`大神与七位伙伴`], dates: [`2010.07.01`], tags: [] },
  { names: [`天体的秩序`], dates: [`2014.10.05`], tags: [] },
  {
    names: [`天降之物 + 天降之物F + 时计じかけの哀女神 + 永遠の私の鳥籠`],
    dates: [`2009.10.04`],
    tags: [],
  },
  { names: [`如果折断她的旗 + OAD`], dates: [`2014.04.06`], tags: [] },
  { names: [`妄想代理人`], dates: [`2004.02.02`], tags: [] },
  { names: [`妖狐×僕SS`], dates: [`2012.01.12`], tags: [] },
  { names: [`姐姐来了(お姉ちゃんが来た)`], dates: [`2014.01.08`], tags: [] },
  { names: [`学园孤岛`], dates: [`2015.07.09`], tags: [] },
  { names: [`学园默示录`], dates: [`2010.07.05`], tags: [] },
  {
    names: [`学战都市Asterisk  2季`],
    dates: [`2015.10.03 + 2016.04.02`],
    tags: [],
  },
  { names: [`守护猫娘绯鞠`], dates: [`2010.01.06`], tags: [] },
  { names: [`宮河家の空腹`], dates: [`2013.04.29`], tags: [] },
  { names: [`寻找失去的未来`], dates: [`2014.10.04`], tags: [] },
  { names: [`対魔導学園35試験小隊`], dates: [`2015.10.07`], tags: [] },
  { names: [`小小雪精灵`], dates: [`2001.10.02`], tags: [] },
  {
    names: [
      `少女与战车`,
      `SP`,
      `OVA 这才是真正的安齐奥战`,
      `剧场版 + OVA 爱里寿战争`,
      `+ OVA 最终章`,
    ],
    dates: [
      `2012.10.08`,
      `2012.12.21`,
      `2014.07.05`,
      `2015.11.21`,
      `2017.12.09 + 2019.06.15`,
    ],
    tags: [],
  },
  { names: [`少女骑士物语`], dates: [`2013.10.06`], tags: [] },
  { names: [`少年阴阳师`], dates: [`2006.10.03`], tags: [] },
  {
    names: [`就算是哥哥有爱就没问题了对吧`],
    dates: [`2012.10.05`],
    tags: [],
  },
  { names: [`属性同好会`], dates: [`2014.01.06`], tags: [] },
  { names: [`山田くんと7人の魔女 + OAD`], dates: [`2015.04.12`], tags: [] },
  {
    names: [`希德尼娅的骑士`, `第九惑星戦役`],
    dates: [`2014.04.10`, `2015.04.10`],
    tags: [],
  },
  { names: [`帰宅部活動記録`], dates: [`2013.07.04`], tags: [] },
  { names: [`干支魂`], dates: [`2015.04.09`], tags: [] },
  {
    names: [`干物妹！うまるちゃん + OVA 小埋、再一次！`],
    dates: [`2015.07.08`],
    tags: [],
  },
  { names: [`幸运☆星`], dates: [`2007.04.08`], tags: [] },
  {
    names: [`幻想嘉年华 + EX season + Special Season`],
    dates: [`2011.08.14`],
    tags: [],
  },
  { names: [`弑神者`], dates: [``], tags: [] },
  {
    names: [`当不成勇者的我，只好认真找工作了。`],
    dates: [`2013.10.04`],
    tags: [],
  },
  { names: [`彼女と彼女の猫`], dates: [`2016.03.04`], tags: [] },
  { names: [`御神乐学园组曲`], dates: [`2015.04.06`], tags: [] },
  { names: [`心灵侦探八云`], dates: [`2010.10.03`], tags: [] },
  { names: [`心灵想要大声呼喊`], dates: [`2015.09.19`], tags: [] },
  {
    names: [`快要坏掉的八音盒 OVA`, `番外`],
    dates: [`2009.12.29`, `2010.09.11`],
    tags: [],
  },
  { names: [`怪盗丽奈`], dates: [`2010.01.08`], tags: [] },
  {
    names: [`恋姬†无双`, `真・恋姬†无双`, `真・恋姬†无双〜少女大乱〜`],
    dates: [`2008.07.08`, `2009.10.05`, `2010.04.01`],
    tags: [],
  },
  { names: [`恋旅~True Tours Nanto~`], dates: [`2013.04.28`], tags: [] },
  { names: [`恋爱与选举与巧克力`], dates: [`2012.07.05`], tags: [] },
  { names: [`恋爱研究所(恋愛ラボ)`], dates: [`2013.07.04`], tags: [] },
  { names: [`恐怖残响`], dates: [``], tags: [] },
  { names: [`悪魔のリドル(恶魔之谜) +`], dates: [`2014.04.03`], tags: [] },
  { names: [`我，要成为双马尾`], dates: [`2014.10.09`], tags: [] },
  { names: [`我家有个狐仙大人`], dates: [`2008.04.06`], tags: [] },
  { names: [`我家浴室的现况`], dates: [`2014.10.05`], tags: [] },
  {
    names: [`我的朋友很少 OAD`, `我的朋友很少`, `僕は友達が少ないNEXT`],
    dates: [`2011.09.22`, `2011.10.06`, `2013.01.10`],
    tags: [],
  },
  { names: [`我的脑内恋碍选项`], dates: [`2013.10.09`], tags: [] },
  { names: [`戦勇。`, `2季`], dates: [`2013.01.08`, `2013.07.02`], tags: [] },
  {
    names: [`戦场のヴァルキュリア（战场女武神）`],
    dates: [`2009.04.04`],
    tags: [],
  },
  { names: [`搞姬日常`], dates: [`2014.07.07`], tags: [] },
  {
    names: [`攻殻機動隊 Stand Alone Complex`, `+`],
    dates: [`2002.10.01`, ``],
    tags: [],
  },
  { names: [`散华礼弥`], dates: [`2012.04.05`], tags: [] },
  {
    names: [`断裁分離のクライムエッジ(断裁分离之罪恶剪刀)`],
    dates: [`2013.04.03`],
    tags: [],
  },
  {
    names: [`旋风管家  4季 + HEAVEN IS A PLACE ON EARTH`],
    dates: [`2007.04.01`],
    tags: [],
  },
  {
    names: [`无头骑士异闻录`, `デュラララ!!×2 承`, `転`, `結`],
    dates: [`2010.01.07`, `2015.01.10`, `2015.07.04`, `2016.01.09`],
    tags: [],
  },
  { names: [`星刻の竜骑士`], dates: [`2014.04.05`], tags: [] },
  {
    names: [`普通女高中生要做当地偶像`, `OVA 大家一起庆祝`],
    dates: [`2014.07.03`, `2015.12.24`],
    tags: [],
  },
  { names: [`暁のヨナ`], dates: [`2014.10.07`], tags: [] },
  { names: [`暗与帽子与书之旅人`], dates: [`2003.10.08`], tags: [] },
  { names: [`暗夜魔法使`], dates: [`2007.10.02`], tags: [] },
  { names: [`曇天に笑う`], dates: [`2014.10.03`], tags: [] },
  { names: [`月刊少女野崎くん`], dates: [`2014.07.07`], tags: [] },
  { names: [`有頂天家族 +`], dates: [`2013.07.07`], tags: [] },
  { names: [`机器人少女Z +`], dates: [``], tags: [] },
  { names: [`机巧魔神  2季`], dates: [`2009.04.02`], tags: [] },
  { names: [`東京ESP`], dates: [`2014.07.11`], tags: [] },
  {
    names: [`東京喰種`, `√A`, `OVA JACK`, `PINTO`],
    dates: [`2014.07.03`, `2015.01.08`, `2015.09.30`, `2015.12.25`],
    tags: [],
  },
  { names: [`枪神斯托拉塔斯`], dates: [`2015.04.04`], tags: [] },
  { names: [`核爆默示录`], dates: [`2013.10.02`], tags: [] },
  { names: [`桃剑`], dates: [``], tags: [] },
  { names: [`桜Trick`], dates: [`2014.01.09`], tags: [] },
  {
    names: [`棺姫のチャイカ + 棺姫のチャイカ AVENGING BATTLE + OVA`],
    dates: [`2014.04.09`],
    tags: [],
  },
  {
    names: [`極黒のブリュンヒルデ(极黑的布伦希尔特) + OVA`],
    dates: [`2014.04.06`],
    tags: [],
  },
  {
    names: [`楽園追放 -Expelled from Paradise-`],
    dates: [`2014.11.15`],
    tags: [],
  },
  { names: [`樱花庄的宠物女孩`], dates: [`2012.10.08`], tags: [] },
  {
    names: [`櫻子さんの足下には死体が埋まっている`],
    dates: [`2015.10.07`],
    tags: [],
  },
  { names: [`武器种族传说`], dates: [`2005.04.05`], tags: [] },
  { names: [`武装神姬 + OVA 月下天使`], dates: [`2012.10.04`], tags: [] },
  { names: [`死亡台球 +`], dates: [``], tags: [] },
  { names: [`水果篮子`], dates: [`2001.07.05`], tags: [] },
  { names: [`洪门剑灵传说`], dates: [`2014.04.03`], tags: [] },
  { names: [`浦和の調ちゃん`], dates: [`2015.04.09`], tags: [] },
  {
    names: [`滑头鬼之孙`, `千年魔京`, `OVA`],
    dates: [`2010.07.05`, `2011.07.03`, ``],
    tags: [],
  },
  { names: [`滨虎  + Re:␣滨虎 +`], dates: [`2014.01.07`], tags: [] },
  { names: [`漆黑的子弹`], dates: [`2014.04.08`], tags: [] },
  { names: [`漫画少女`], dates: [`2013.01.02`], tags: [] },
  {
    names: [`漫研部`, `~妄想突变~`],
    dates: [`2013.01.03`, `2014.07.08`],
    tags: [],
  },
  {
    names: [`灰色的果实 + グリザイアの迷宫 + グリザイアの楽園`],
    dates: [`2014.10.05`],
    tags: [],
  },
  { names: [`灼眼的夏娜`, `+`], dates: [``, ``], tags: [] },
  { names: [`無敵看板娘`], dates: [`2006.07.04`], tags: [] },
  { names: [`熱風海陸ブシロード + SP`], dates: [`2013.12.31`], tags: [] },
  { names: [`爱杀宝贝`], dates: [`2012.01.05`], tags: [] },
  { names: [`犬神さんと猫山さん`], dates: [`2014.04.10`], tags: [] },
  { names: [`独眼巨人少女斋枫`], dates: [`2013.03.12`], tags: [] },
  { names: [`献给某飞行员的恋歌`], dates: [`2014.01.06`], tags: [] },
  { names: [`獣の奏者エリン`], dates: [`2009.01.11`], tags: [] },
  { names: [`玻璃之唇`], dates: [`2014.07.03`], tags: [] },
  { names: [`琴浦小姐`], dates: [`2013.01.10`], tags: [] },
  {
    names: [`甘城光辉游乐园 + SP心跳迷你剧院`],
    dates: [`2014.10.06`],
    tags: [],
  },
  { names: [`电器街的漫画店`], dates: [`2014.10.02`], tags: [] },
  { names: [`电脑线圈`], dates: [`2007.05.12`], tags: [] },
  { names: [`男高日常 + SP`], dates: [`2012.01.09`], tags: [] },
  { names: [`目隐都市的演绎者`], dates: [`2014.04.12`], tags: [] },
  {
    names: [`直球表题ロボットアニメ（直白标题机器人动画）`],
    dates: [`2013.02.06`],
    tags: [],
  },
  { names: [`真实之泪(true tears)`], dates: [`2008.01.05`], tags: [] },
  { names: [`真月譚 月姫`], dates: [`2003.10.09`], tags: [] },
  { names: [`破刃之剑剧场版 + (TV)`], dates: [``], tags: [] },
  {
    names: [`神さまのいない日曜日(神不在的星期天)`],
    dates: [`2013.07.06`],
    tags: [],
  },
  { names: [`神撃のバハムートGENESIS +?`], dates: [``], tags: [] },
  { names: [`神無月の巫女`], dates: [`2004.10.01`], tags: [] },
  { names: [`神的记事本`], dates: [`2011.07.02`], tags: [] },
  { names: [`神隐之狼`], dates: [`2010.01.07`], tags: [] },
  { names: [`稻荷恋之歌`], dates: [`2014.01.15`], tags: [] },
  { names: [`空戦魔導士候補生の教官`], dates: [`2015.07.08`], tags: [] },
  { names: [`穿透幻影的太阳 + OVA`], dates: [`2013.07.06`], tags: [] },
  {
    names: [`竖笛与双肩书包 DO♪`, `RE♪`, `OAD`, `MI☆`],
    dates: [`2012.01.05`, `2012.04.03`, `2012.07.17`, `2013.07.01`],
    tags: [],
  },
  { names: [`笨蛋测试召唤兽`], dates: [`2010.01.06`], tags: [] },
  { names: [`精霊使いの剣舞`], dates: [`2014.07.14`], tags: [] },
  { names: [`純潔のマリア`], dates: [`2015.01.11`], tags: [] },
  {
    names: [`絶対可憐チルドレン`, `OVA`, `THE UNLIMITED -兵部京介-`],
    dates: [`2008.04.06`, `2010.07.16`, `2013.01.07`],
    tags: [],
  },
  { names: [`絶対防衛レヴィアタン`], dates: [`2013.04.06`], tags: [] },
  { names: [`絶滅危愚少女 Amazing Twins`], dates: [`2014.02.26`], tags: [] },
  {
    names: [`緋弾のアリア + OVA`, `AA`],
    dates: [`2011.04.14`, `2015.10.06(AA)`],
    tags: [],
  },
  {
    names: [`繰繰れ! コックリさん（银仙）`],
    dates: [`2014.10.05`],
    tags: [],
  },
  {
    names: [`约会大作战`, `Ⅱ`, `劇場版 万由里ジャッジメント(Judgement)`, `Ⅲ`],
    dates: [`2013.04.06`, `2014.04.12`, `2015.08.22`, `2019.01.11`],
    tags: [],
  },
  {
    names: [`终结的炽天使 + 名古屋决战篇 + OVA + SP`],
    dates: [`2015.04.04`],
    tags: [],
  },
  { names: [`绝对双刃`], dates: [`2015.01.04`], tags: [] },
  { names: [`绝灭危愚少女`], dates: [`2014.02.26`], tags: [] },
  { names: [`缘之空`], dates: [`2010.10.04`], tags: [] },
  { names: [`罪恶王冠(Guilty Crown)`], dates: [`2011.10.13`], tags: [] },
  {
    names: [`美少女戦士セーラームーンCrystal`, `2季`],
    dates: [`2014.07.05`, `2015.01.17`],
    tags: [],
  },
  { names: [`美少女死神还我H之魂`], dates: [`2012.07.06`], tags: [] },
  { names: [`群居姐妹`], dates: [`2015.07.09`], tags: [] },
  {
    names: [
      `翠星のガルガンティア / 迷你加尔刚蒂亚`,
      `OVA ～めぐる航路、遥か～前編`,
      `後編`,
    ],
    dates: [`2013.04.07`, `2014.09.27`, `2015.04.30`],
    tags: [],
  },
  { names: [`聖剣使いの禁呪詠唱`], dates: [`2015.01.11`], tags: [] },
  { names: [`肯普法`], dates: [`2009.10.02`], tags: [] },
  {
    names: [
      `腹黑妹妹控兄记(お兄ちゃんのことなんかぜんぜん好きじゃないんだからねっ!!)`,
    ],
    dates: [`2011.01.08`],
    tags: [],
  },
  { names: [`艦隊これくしょん -艦これ-`], dates: [`2015.01.07`], tags: [] },
  {
    names: [`艾斯卡与罗吉的工房〜黄昏の空の錬金術士〜`],
    dates: [`2014.04.10`],
    tags: [],
  },
  { names: [`花舞少女`], dates: [`2014.07.07`], tags: [] },
  { names: [`苍翼默示录`], dates: [`2013.10.08`], tags: [] },
  {
    names: [`苍蓝钢铁的琶音–ARS NOVA–`, `DC`, `Cadenza`],
    dates: [`2013.10.07`, `2015.01.31`, `2015.10.03`],
    tags: [],
  },
  { names: [`若叶女孩`], dates: [`2015.07.03`], tags: [] },
  {
    names: [`萌菌物语`, `Returns`],
    dates: [`2007.10.11`, `2012.07.05`],
    tags: [],
  },
  { names: [`萌萌侵略者OUTBREAK COMPANY`], dates: [`2013.10.03`], tags: [] },
  { names: [`萝莉的时间 +`], dates: [``], tags: [] },
  {
    names: [`蔷薇少女`, `彷如梦境`, `OVA`, `新蔷薇少女`],
    dates: [`2004.10.07`, `2005.10.20`, `2006.12.22`, `2013.07.04`],
    tags: [],
  },
  { names: [`薬師寺涼子の怪奇事件簿`], dates: [`2008.07.05`], tags: [] },
  { names: [`虫奉行 + OVA`], dates: [`2013.04.08`], tags: [] },
  { names: [`蛍火の杜へ`], dates: [`2011.09.11`], tags: [] },
  { names: [`血液型くん！  2季 +`], dates: [`2013.04.07`], tags: [] },
  { names: [`贫乏神来了`], dates: [`2012.07.04`], tags: [] },
  { names: [`贫穷姐妹物语`], dates: [`2006.06.29`], tags: [] },
  { names: [`超智游戏`], dates: [`2008.10.08`], tags: [] },
  { names: [`超次元游戏 海王星`], dates: [`2013.07.12`], tags: [] },
  { names: [`超级索尼子`], dates: [`2014.01.06`], tags: [] },
  {
    names: [`轮回的拉格朗日  2季 + OVA（鸭川days） + SP`],
    dates: [`2012.01.08`],
    tags: [],
  },
  { names: [`这丑陋又美丽的世界`], dates: [`2004.04.01`], tags: [] },
  {
    names: [`迷糊餐厅(WORKING!!)`, `WORKING'!!`, `WORKING!!!`, `+`],
    dates: [`2010.04.04`, `2011.10.01`, `2015.07.04`, `+`],
    tags: [],
  },
  { names: [`進撃の巨人 + SP9`], dates: [``], tags: [] },
  {
    names: [`邻座的怪同学`, `OAD`],
    dates: [`2012.10.01`, `2013.08.12`],
    tags: [],
  },
  { names: [`重装武器`], dates: [`2015.10.02`], tags: [] },
  { names: [`野良神 + ARAGOTO`], dates: [`2014.01.05`], tags: [] },
  { names: [`金田一少年の事件簿R`], dates: [``], tags: [] },
  {
    names: [`銀の匙 Silver Spoon`, `2季`],
    dates: [`2013.07.11`, `2014.01.09`],
    tags: [],
  },
  { names: [`銀河機攻隊MAJESTIC PRINCE`], dates: [`2013.04.04`], tags: [] },
  { names: [`銃皇無尽のファフニール`], dates: [`2015.01.08`], tags: [] },
  { names: [`银狐`], dates: [`2013.10.06`], tags: [] },
  { names: [`闪乱神乐 + SP + OVA`], dates: [`2013.01.06`], tags: [] },
  { names: [`闪烁的青春`], dates: [`2014.07.08`], tags: [] },
  { names: [`零度战姬  2季`], dates: [``], tags: [] },
  {
    names: [`青之驱魔师`, `OVA 小黑出走记`, `剧场版`],
    dates: [`2011.04.17`, `2011.10.26`, `2012.12.28`],
    tags: [],
  },
  { names: [`青春×機関銃`], dates: [`2015.07.02`], tags: [] },
  { names: [`革命機valvrave`], dates: [`2013.04.11`], tags: [] },
  { names: [`革神语`], dates: [`2013.04.08`], tags: [] },
  { names: [`颠倒的帕特玛`], dates: [`2013.11.09`], tags: [] },
  {
    names: [`食戟のソーマ`, `弍ノ皿`, `餐ノ皿`, `+?`],
    dates: [`2015.04.03`, `2016.07.02`, `2017.10.03`, ``],
    tags: [],
  },
  { names: [`魔人探侦脳噛ネウロ`], dates: [`2007.10.02`], tags: [] },
  {
    names: [`魔剑姬`, `マケン姫っ！通`],
    dates: [`2011.10.04`, `2014.01.15`],
    tags: [],
  },
  {
    names: [`魔力家族`, `OVA(La prima festa)`],
    dates: [`2012.07.01`, `2013.03.27`],
    tags: [],
  },
  { names: [`魔卡少女樱 +`], dates: [`1998.04.07`], tags: [] },
  {
    names: [`魔女的使命`, `OAD`],
    dates: [`2014.01.05`, `2015.01.07`],
    tags: [],
  },
  {
    names: [`魔弾の王と戦姫 + SP(堤格尔君与战姬亲)`],
    dates: [`2014.10.04`],
    tags: [],
  },
  { names: [`魔法少女大戦`], dates: [`2014.04.08`], tags: [] },
  { names: [`魔法戦争`], dates: [`2014.01.09`], tags: [] },
  { names: [`魔王勇者`], dates: [`2013.01.04`], tags: [] },
  { names: [`鸦KARAS`], dates: [`2005.03.25`], tags: [] },
  { names: [`鹡鸰女神  2季`], dates: [``], tags: [] },
  { names: [`麻雀酒店`], dates: [`2013.04.09`], tags: [] },
  {
    names: [`黄金拼图`, `Hello!!きんいろモザイク`, `Pretty Days`],
    dates: [`2013.07.06`, `2015.04.05`, `2016.11.12`],
    tags: [],
  },
  { names: [`黒執事`, `+`], dates: [`2008.10.02`, ``], tags: [] },
  { names: [`黒塚-KUROZUKA-`], dates: [`2008.10.07`], tags: [] },
  { names: [`龙之界点`], dates: [`2011.01.10`], tags: [] },
  {
    names: [
      `ジョジョの奇妙な冒険`,
      `スターダストクルセイダース (星辰远征军) + (埃及篇)`,
      `+ ダイヤモンドは砕けない (不灭钻石)`,
      `+ 黄金の風`,
    ],
    dates: [
      `2012.10.05`,
      `2014.04.04 + 2015.01.09`,
      `2016.03.31`,
      `2018.10.06`,
    ],
    tags: [],
  },
  // C
  {
    names: [`Q弟侦探因幡`],
    dates: [`2013.01.04`],
    tags: [`ignore`],
    rate: `C`,
  },
  {
    names: [`吸血鬼福尔摩斯`],
    dates: [`2015.04.04`],
    tags: [`ignore`],
    rate: `C`,
  },
  { names: [`解谜公主是名侦探`], dates: [`2012.08.03`], tags: [], rate: `C` },
];

export default data;
