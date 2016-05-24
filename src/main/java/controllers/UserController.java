package controllers;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.UserService;

import java.util.Collection;

/**
 * Created by sadmin on 06.05.2016.
 */

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<User> getUsers(String search) {

        return userService.getUsers(search);
    }


    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setUser(@RequestBody User user) {

        return new ExtResult(userService.add(user), user);

    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteUser(@RequestBody User user) {
        userService.delete(user);

        return "delete";
    }



    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateUser(@RequestBody User user) {
        userService.update(user);

        return "update";
    }


}
