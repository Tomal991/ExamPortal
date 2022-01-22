package com.example.ExamPortal.Backend;

import com.example.ExamPortal.Backend.helper.UserFoundException;
import com.example.ExamPortal.Backend.model.Role;
import com.example.ExamPortal.Backend.model.User;
import com.example.ExamPortal.Backend.model.UserRole;
import com.example.ExamPortal.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamPortalBackendApplication implements CommandLineRunner {
    @Autowired
    private UserService userService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(ExamPortalBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
//       try {
//        System.out.println("starting");
//
//           User user = new User();
//
//            user.setFirstName("tomal");
//            user.setLastName("999");
//            user.setUsername("tomal999");
//            user.setPassword(this.bCryptPasswordEncoder.encode("999"));
//            user.setEmail("abc@gmail.com");
//            user.setProfile("default.png");
//
//            Role role1 = new Role();
//            role1.setRoleId(10L);
//            role1.setRoleName("admin");
//
//            Set<UserRole> userRoleSet = new HashSet<>();
//            UserRole userRole = new UserRole();
//
//            userRole.setRole(role1);
//
//            userRole.setUser(user);
//
//            userRoleSet.add(userRole);
//
//            User user1 = this.userService.createUser(user, userRoleSet);
//            System.out.println(user1.getUsername());
//
//        } catch (UserFoundException e) {
//            e.printStackTrace();
//      }
    }

}
