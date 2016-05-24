package model.dao;

import model.User;

import java.util.Collection;
import java.util.List;

/**
 * Created by sadmin on 06.05.2016.
 */
public interface UserDao {

    void add(User user);

    void update(User user);

    void delete(User user);

    Collection<User> getUsers(String search);

    public List findByUser(String username, String usermail);

}
