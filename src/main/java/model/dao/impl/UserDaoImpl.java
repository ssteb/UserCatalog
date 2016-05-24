package model.dao.impl;

import model.User;
import model.dao.UserDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

/**
 * Created by sadmin on 06.05.2016.
 */
public class UserDaoImpl implements UserDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(User user) {
        emf.persist(user);
    }

    @Override
    public void update(User user) {
        emf.merge(user);
    }

    @Override
    public void delete(User user) {
        emf.remove(emf.getReference(User.class, user.getId()));
    }

    @Override
    public Collection<User> getUsers(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "SELECT c FROM User c")
                    .getResultList();
        }

        return emf.createQuery(
                "SELECT c FROM User c WHERE c.username like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<User> findByUser(String username, String usermail) {
        return emf.createQuery(
                "SELECT c FROM User c WHERE c.username = :username AND c.usermail = :usermail")
                .setParameter("username", username)
                .setParameter("usermail", usermail)
                .getResultList();
    }

}
