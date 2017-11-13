/*
Navicat MySQL Data Transfer

Source Server         : STDSERVER
Source Server Version : 50720
Source Host           : www.stdserver.cn:3306
Source Database       : weapp

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-11-12 02:22:56
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
  `ownerID` int(11) NOT NULL COMMENT '业务员ID',
  `status` int(11) NOT NULL COMMENT '跟进情况0:进行中1:已完成',
  PRIMARY KEY (`id`),
  KEY `orderinfo-ownerIDByuserinfo-id` (`ownerID`),
  CONSTRAINT `orderinfo-ownerIDByuserinfo-id` FOREIGN KEY (`ownerID`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单信息表';
