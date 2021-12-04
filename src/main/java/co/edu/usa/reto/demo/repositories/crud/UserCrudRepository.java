package co.edu.usa.reto.demo.repositories.crud;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import co.edu.usa.reto.demo.entities.User;

/**
 * 
 * @author nelsonwiesner
 */
public interface UserCrudRepository extends CrudRepository<User,Integer>{
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email,String password);
}
