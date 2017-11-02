'use strict';

const env = 'dev';  //dev production

/*
* 默认接口出错弹窗文案
* @type {{en:string}}
*/

const defaultAlertMessage = '好像哪里出了问题~请再试一次';

/*
* 默认分享文案
* @type {{en: string}}
*/

const defaultShareText ={
  en:"学英语-英语口语四级"
}

/*
* 小程序默认标题栏文字
* @type {string}
*/

const defaultBarTitle = {
  en:"iKcamp英语学习"
}

/*
* 文章默认图片
* @type {string}
*/

const defaultImg = {
  articleImg:'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png'
};

let core = {
  env:env,
  defaultBarTitle:defaultBarTitle["env"],
  defaultImg:defaultImg,
  defaultAlterMsg:defaultAlertMessage,
  defaultShareText:defaultShareText['en'],
  isDev:env === 'dev',
  isProduction:env === 'production'
};

export default core;