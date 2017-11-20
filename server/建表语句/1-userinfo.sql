/*
Navicat MySQL Data Transfer

Source Server         : wamp
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : weapp

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 01:07:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `phone` char(11) NOT NULL COMMENT '手机号',
  `id` int(11) NOT NULL COMMENT '员工ID',
  `fullname` char(10) NOT NULL COMMENT '真实姓名',
  `openid` char(28) DEFAULT NULL COMMENT '微信openid',
  `avatorUrl` varchar(100) DEFAULT NULL COMMENT '用户头像',
  `password` char(18) NOT NULL COMMENT '密码',
  `identity` int(11) NOT NULL DEFAULT '0' COMMENT '身份id',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '审核状态',
  PRIMARY KEY (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户信息';

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('15732136610', '20153299', '刘立伟', null, null, '123', '0', '0');
