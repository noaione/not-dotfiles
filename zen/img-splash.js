/**
 * This is a code snippet of my rotating image splash that is used in userContent.css
 * 
 * Hosted with express.js on glitch.me
 * 
 * @license MIT 2019-present noaione
 */

const IMAGE_LIST = [
  "https://p.ihateani.me/zpcfdszc.jpg",
  "https://p.ihateani.me/gsldeqhw.jpg",
  "https://p.ihateani.me/jyrscpxo.jpg",
  "https://p.ihateani.me/ronklugq.jpg",
  "https://p.ihateani.me/xrevihcg.jpg",
  "https://p.ihateani.me/pgvmzzgp.jpg",
  // "https://pbs.twimg.com/media/Fj3isGMagAEJi1z?format=jpg&name=large",
  "https://p.ihateani.me/dlqxzipl.jpg",
  "https://p.ihateani.me/wjprtenz.jpg",
  // "https://cdn.donmai.us/original/8f/ee/__gotou_hitori_ijichi_nijika_yamada_ryou_and_kita_ikuyo_bocchi_the_rock_and_1_more_drawn_by_mogggggge__8fee31efcfd535f8d7a7b2325147e04e.jpg",
  "https://p.ihateani.me/epprkcrd.jpg",
  // "https://cdn.donmai.us/original/92/f5/__qingque_and_fu_xuan_honkai_and_1_more_drawn_by_fengtu_ad__92f58a772f561b7ff97f3874e14b50ef.jpg",
  "https://p.ihateani.me/ggxrdqmg.jpg",
  "https://p.ihateani.me/davsardt.jpg",
  // "https://cdn.donmai.us/original/e2/55/__qingque_and_fu_xuan_honkai_and_1_more_drawn_by_rafaelaaa__e25514fa6a6bad2c5c431d7a05ea9821.jpg",
  "https://p.ihateani.me/mdlmxztw.jpg",
  "https://p.ihateani.me/wmkxnsxx.jpg",
  "https://p.ihateani.me/tsdpftsu.jpg",
  // "https://cdn.donmai.us/original/e2/db/__fu_xuan_and_qingque_honkai_and_1_more_drawn_by_kun_kun__e2dbf090f2d81f55bdb7c24bd4f6ca55.jpg",
  "https://p.ihateani.me/zitwdztk.jpg",
  // "https://cdn.donmai.us/original/f8/40/__bailu_qingque_sushang_and_yukong_honkai_and_1_more_drawn_by_menthako__f840d4b9dd84a80c9604c2a9edce4057.jpg",
  "https://p.ihateani.me/rebcnuvh.jpg",
  // "https://cdn.donmai.us/original/89/17/__fu_xuan_honkai_and_1_more_drawn_by_vardan__8917a03c648533dce897ca17b4a85100.png",
  "https://p.ihateani.me/susutpsp.png",
  // https://cdn.donmai.us/original/53/c8/__jingliu_fu_xuan_and_qingque_honkai_and_1_more_drawn_by_lemonpear__53c87eeff9bca2a07c585187542c55f6.jpg
  "https://p.ihateani.me/sxjwrzec.jpg",
  // https://cdn.donmai.us/original/60/f3/__fu_xuan_and_qingque_honkai_and_1_more_drawn_by_zcing__60f3d71b91773ce7003f2ba6a9c60081.jpg
  "https://p.ihateani.me/aqzepmuu.jpg",
  // https://cdn.donmai.us/original/93/3b/__fu_xuan_and_qingque_honkai_and_1_more_drawn_by_geez__933b6ecda2b970b71335c2460e76106d.jpg
  "https://p.ihateani.me/akelgwcn.jpg",
  // https://cdn.donmai.us/original/c6/9c/__trailblazer_stelle_and_firefly_honkai_and_1_more_drawn_by_yajuu__c69c6fc854a13203fa542834a1562c0f.jpg
  "https://p.ihateani.me/ldguthjx.jpg",
  // https://cdn.donmai.us/original/f9/84/__cecilia_immergreen_otomo_and_cecilia_immergreen_hololive_and_1_more_drawn_by_sebu_illust__f98479b8ee00b4336c83610d31ee30f2.jpg
  "https://p.ihateani.me/xaysmvge.jpg",
];

function getCurrentSecond() {
  return (new Date()).getSeconds()
}
function mapRange(current) {
  return (1 + Math.round(((IMAGE_LIST.length - 1) / (60 - 1)) * (current - 1))) - 1;
}
function selectImage() {
  const currentTime = getCurrentSecond();
  const imgIndex = mapRange(currentTime);
  return IMAGE_LIST[imgIndex];
}
function getCurrentSplashImage(response, getImage = null) {
  const img = (getImage !== null ? IMAGE_LIST[getImage] : selectImage()) || selectImage();
  console.log("Sending a custom splash image of", img);
  response.redirect(img);
}

exports.getCurrentSplashImage = getCurrentSplashImage;
