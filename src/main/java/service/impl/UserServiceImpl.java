package service.impl;

import model.User;
import model.dao.UserDao;
import org.springframework.transaction.annotation.Transactional;
import service.UserService;

import java.util.Collection;
import java.util.List;

/**
 * Created by sadmin on 06.05.2016.
 */
public class UserServiceImpl implements UserService{

    private UserDao userDao;

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }


    @Transactional
    @Override
    public Boolean add(User user) {
        List<User> duplicate = userDao.findByUser(user.getUsername(), user.getUsermail());
        if (duplicate.isEmpty()) {
            userDao.add(user);
            return true;
        }

        return false;

    }

    @Transactional
    @Override
    public void update(User user) {
        userDao.update(user);

    }


    @Transactional
    @Override
    public Collection<User> getUsers(String search) {
        return userDao.getUsers(search);

    }


    @Transactional
    @Override
    public void delete(User user) {
        userDao.delete(user);
    }

}
