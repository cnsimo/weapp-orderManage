package cn.simo.web.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.*;

import cn.simo.domain.User;
import cn.simo.service.UserService;

public class LoginServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String userType = request.getParameter("userType");
		
		User user = null;
		String result = "";
		try {
			user = new UserService().login(username,password);
		} catch (SQLException e) {
			result = "{result:0}";
			response.getWriter().append(result);
			e.printStackTrace();
			throw new RuntimeException("网络异常，请稍后再试");
		}
		
		/*
		 * result:
		 * 		0 --- 网络异常，请稍后再试
		 * 		1 --- 此账户不存在
		 * 		2 --- 此账户正在审核中
		 * 		3 --- 登陆成功
		 */
		
		if(user == null) {
			result = "{result:1}";
			response.getWriter().append(result);
		} else if(user.getStatus() == 0) {
			result = "{result:2}";
			response.getWriter().append(result);
		} else if (user.getUserType() != Integer.parseInt(userType)) {
			result = "{result:1}";
			response.getWriter().append(result);
		} else {
			result = "{result:3}";
			response.getWriter().append(result+"<br/>");
			/*
			 * JSONObject.fromObject(obj)可将实例类直接转为JSON
			 * 导入的jar包：
			 * 		commons-beanutils-**.jar
			 * 		commons-collections-**.jar
			 * 		commons-lang-**.jar
			 * 		commons-logging-**.jar
			 * 		ezmorph-**.jar
			 * 		json-lib-**.jar
			 */
			response.getWriter().append(JSONObject.fromObject(user).toString());
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
}
