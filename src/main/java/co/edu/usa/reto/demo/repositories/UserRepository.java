package co.edu.usa.reto.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.edu.usa.reto.demo.entities.User;
import co.edu.usa.reto.demo.repositories.crud.UserCrudRepository;

/**
 * 
 * @author nelsonwiesner
 */
@Repository
public class UserRepository {
    @Autowired
    private UserCrudRepository userCrudRepository;

    public List<User> getAll() {
        return (List<User>) userCrudRepository.findAll();
    }

    public Optional<User> getUser(int id){
        return userCrudRepository.findById(id);
    }

    public User save(User user){
        return userCrudRepository.save(user);
    }

    public boolean existeEmail(String email){
        Optional<User> usuario=userCrudRepository.findByEmail(email);
        return !usuario.isEmpty();
    }

    public Optional<User> autenticarUsuario(String email,String password) {
        return userCrudRepository.findByEmailAndPassword (email, password);
    }

}
