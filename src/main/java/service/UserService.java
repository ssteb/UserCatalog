package service;

import model.User;

import java.util.Collection;

/**
 * Created by sadmin on 06.05.2016.
 */
public interface UserService {
    Boolean add(User user);

    void update(User user);

    Collection<User> getUsers(String search);

    void delete(User user);
}
