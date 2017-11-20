package cn.simo.service;

import java.sql.SQLException;

import cn.simo.dao.UserDao;
import cn.simo.domain.User;

public class UserService {
	/**
	 * 用户登陆
	 * @param username 用户�?
	 * @param password 密码
	 * @return User 用户
	 * @throws SQLException 
	 */
	public User login(String username, String password) throws SQLException {
		UserDao dao = new UserDao();
		return dao.getUserByUsernameAndPassword(username,password);
	}

}
