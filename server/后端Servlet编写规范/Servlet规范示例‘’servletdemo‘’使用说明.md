# Servlet规范示例 "servletdemo" 使用说明
> 首先，我们写的后端java代码一定要符合 “高内聚低耦合” 的程序设计规则，为此，所有相关开发人员请参照示例项目 “servletdemo” 中的代码风格来统一编写，以便于后期快速完成代码交接工作。在开发中需要注意一下几点：
> 1. 代码中的 <span style="color:green">**类名**</span> 、 <span style="color:green">**包名**</span> 和 <span style="color:green">**方法名称**</span> 都已经由项目经理商榷决定，务必按照 API文档 编写;
> 2. 关于Servlet的响应信息已在 API文档 中说明;
> 3. 所有API方法的 <span style="color:green">**参数列表**</span> 和 <span style="color:green">**返回值**</span> 请查看API文档;
> 4. 务必注意包名、类名、方法名的<span style="color:green">**大小写**</span>;
> 5. 统一按照“ServletDemo”项目中的包名来编写接口;
> 6. 如果在编写过程中，<span style="color:red">**请严格遵循以下编程规范**</span>，有任何问题请及时呼叫项目经理;

## 设计规范
> 设计原则：一个类中只做一件事情，绝不多做！

### 一、Bean类（如User、Order）
> 它的任务：存储 用户信息 和 订单信息

使用JavaBean对象来表示实体，如订单管理中有两大实体对象 用户类 和 订单类，JavaBean具有如下特点：
1. JavaBean的属性可以是任意类型，并且一个JavaBean可以有多个属性。每个属性通常都需要具有相应的setter、 getter方法，setter方法称为属性修改器，getter方法称为属性访问器。
2. 属性修改器必须以小写的set前缀开始，后跟属性名，且属性名的第一个字母要改为大写，例如，name属性的修改器名称为setName，password属性的修改器名称为setPassword。
3. 属性访问器通常以小写的get前缀开始，后跟属性名，且属性名的第一个字母也要改为大写，例如，name属性的访问器名称为getName，password属性的访问器名称为getPassword。
4. 一个JavaBean的某个属性也可以只有set方法或get方法，这样的属性通常也称之为只写、只读属性。

<span style="color:red">**在 订单管理系统 中，用户类 和 订单 类中的属性请与数据库表中的字段以及字段类型保持一致！**</span>
<span style="color:red">**订单和用户表中的数据有少许更新，具体请查看 [建表语句] 文件夹中的pdf文档！**</span>
### 二、DAO类（如UserDao、OrderDao）
> 它的任务：访问数据库，即登录、注册服务的具体实现

DAO(Data Access Object) 数据访问对象是一个面向对象的数据库接口，例如：

    /*UserDao.java*/
	public class UserDao {
    	/**
    	 * 通过用户名和密码获得用户
    	 * @param username 用户名
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
它只做访问数据库的工作，把 数据 封装成实体类(User) 返回(return) 给调用它的人。

Tip: 这里用到了c3p0工具类连接数据库，使用它访问数据库将更加方便，更换机器时，请及时配置项目文件中c3p0-config.xml中的配置信息，里面的内容如下：

	<c3p0-config>
	<!-- 默认配置，如果没有指定则使用这个配置 -->
	    <default-config>
    		<!-- 基本配置 -->
    		<property name="driverClass">com.mysql.jdbc.Driver</property>
    		<property name="jdbcUrl">jdbc:mysql:///wxlogin?useSSL=false</property>
    		<property name="user">root</property>
    		<property name="password">root</property>
    	
    		<!--扩展配置-->
    		<property name="checkoutTimeout">30000</property>
    		<property name="idleConnectionTestPeriod">30</property>
    		<property name="initialPoolSize">10</property>
    		<property name="maxIdleTime">30</property>
    		<property name="maxPoolSize">100</property>
    		<property name="minPoolSize">10</property>
    		<property name="maxStatements">200</property>
    	</default-config> 
	</c3p0-config> 

如何配置c3p0,参考：[百度 c3p0连接方式](http://blog.csdn.net/soyuone/article/details/51554263)

### 三、Service类（如UserService）
> 它的任务：提供服务，供Servlet中直接调用

这个类算是一个汇聚口，它把登录、注册、添加订单等等服务汇聚在它这里，但它的作用也只是提供服务，它并不关心服务具体是怎么实现的，例如：

    public class UserService {
    	/**
    	 * 用户登陆
    	 * @param username 用户名
    	 * @param password 密码
    	 * @return User 用户
    	 * @throws SQLException 
    	 */
    	public User login(String username, String password) throws SQLException {
    		UserDao dao = new UserDao();
    		return dao.getUserByUsernameAndPassword(username,password);
    	}
    }

UserService.login() 方法 其实是 UserService类对外提供 登录 的服务，但是可以看到login的实现代码中，并没有去管怎么去登录，只是呼叫UserDao类把事情甩给DAO去实现。


### 四、Servlet类（如LoginServlet）
> 它的任务：对客户端的请求做出正确的响应

在这里，很简单，有客户端发来请求，servlet中去调用Service层中的相关服务，最后做正确的响应处理，其他一概不管，这里就不再举例了。

## 源文件的编码方式
> 在eclipse中，默认的编码方式是GBK，这样UTF8编码的文件可能会出现中文乱码，并且为了可移植性更好，请务必按照下面的方法更改编码方式后再构建项目。

#### 1. 打开eclipse，可以看到菜单栏中的 【Window】，打开【Preferences】对话框。
![](https://i.imgur.com/MEG8xp8.png)

#### 2. 在左上角搜索框中输入 "workspace",打开 workspace 选项卡，如图所示。
![](https://i.imgur.com/SbPc2kd.png)

#### 3. 按照图中箭头所指，做出正确的更改，点击 Apply，然后关闭对话框完成设置。
#### 4. 这时创建的项目默认就是UTF8编码的。