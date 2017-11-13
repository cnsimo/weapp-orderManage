/*
Navicat MySQL Data Transfer

Source Server         : STDSERVER
Source Server Version : 50720
Source Host           : www.stdserver.cn:3306
Source Database       : weapp

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-11-12 02:23:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '员工ID',
  `phone` char(18) NOT NULL COMMENT '手机号',
  `fullname` char(10) NOT NULL COMMENT '真实姓名',
  `openid` char(28) DEFAULT NULL COMMENT '微信openid',
  `avatorUrl` varchar(100) DEFAULT NULL COMMENT '用户头像',
  `password` char(18) NOT NULL COMMENT '密码',
  `identity` int(11) NOT NULL DEFAULT '0' COMMENT '身份id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '审核状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息';
