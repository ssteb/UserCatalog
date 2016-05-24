package controllers;

import model.User;

/**
 * Created by sadmin on 06.05.2016.
 */
public class ExtResult {
    private boolean success;
    private User data;

    public ExtResult(boolean success, User data) {
        this.success = success;
        this.data = data;

    }

    public ExtResult() {
    }

    public boolean isSuccess() {

        return success;
    }


    public void setSuccess(boolean success) {
        this.success = success;
    }


    public User getData() {
        return data;
    }

    public void setData(User data) {
        this.data = data;
    }
}
