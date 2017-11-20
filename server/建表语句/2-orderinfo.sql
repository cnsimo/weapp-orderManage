/*
Navicat MySQL Data Transfer

Source Server         : wamp
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : weapp

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 01:07:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for orderinfo
-- ----------------------------
DROP TABLE IF EXISTS `orderinfo`;
CREATE TABLE `orderinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `createdDate` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '订单创建时间',
  `project` varchar(45) NOT NULL COMMENT '项目名称',
  `comment` varchar(45) DEFAULT NULL COMMENT '项目备注',
  `company` varchar(20) NOT NULL COMMENT '业务公司',
  `address` varchar(45) DEFAULT NULL COMMENT '业务地址',
  `contact` char(11) NOT NULL COMMENT '联系电话',
  `ownerPhone` char(11) NOT NULL COMMENT '业务员手机号',
  `status` int(11) NOT NULL COMMENT '跟进情况0:进行中1:已完成',
  PRIMARY KEY (`id`),
  KEY `ownerPhone` (`ownerPhone`),
  CONSTRAINT `orderinfo_ibfk_1` FOREIGN KEY (`ownerPhone`) REFERENCES `userinfo` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=234235333 DEFAULT CHARSET=utf8 COMMENT='订单信息表';

-- ----------------------------
-- Records of orderinfo
-- ----------------------------
INSERT INTO `orderinfo` VALUES ('234235332', '2017-11-20 01:04:38', '木箱制作', '需要后期协商', '铁大信息', '石家庄东风路', '15832915854', '15732136610', '0');
