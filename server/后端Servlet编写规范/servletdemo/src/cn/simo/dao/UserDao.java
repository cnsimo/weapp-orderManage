package cn.simo.dao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.sun.media.jfxmedia.events.NewFrameEvent;
import com.sun.org.apache.bcel.internal.generic.NEW;

import cn.simo.domain.User;
import cn.simo.utils.DataSourceUtils;

public class UserDao {
	/**
	 * 通过用户名和密码获得用户
	 * @param username 用户�?
	 * @param password 密码
	 * @return User 用户
	 * @throws SQLException 
	 */
	public User getUserByUsernameAndPassword(String username, String password) throws SQLException {
		QueryRunner qr = new QueryRunner(DataSourceUtils.getDataSource());
		
		String sql = "select * from user where username = ? and password = ?";
		
		User user = qr.query(sql, new BeanHandler<>(User.class), username, password);
		return user;
	}

}
