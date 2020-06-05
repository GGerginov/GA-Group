package GA.demo.domain;

import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User extends BaseEntity implements UserDetails {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false,unique = true)
    private String password;

    @Column(nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    private Set<Role> authorities;

    private List<Car> cars;

    public User() {
    }


    public void setUsername(String name) {
        this.username = name;
    }

    @Override
    @ManyToMany(targetEntity = Role.class, fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id",
                    referencedColumnName = "id"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id",
                    referencedColumnName = "id"
            )
    )
    public Set<Role> getAuthorities() {
        return authorities;
    }


    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    @Transient
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @Transient
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    @Transient
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }


}
