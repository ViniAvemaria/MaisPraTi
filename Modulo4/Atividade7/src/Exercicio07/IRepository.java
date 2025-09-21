package Exercicio07;

import java.util.List;
import java.util.Optional;

public interface IRepository<T extends Identifiable<ID>, ID> {
    void save(T entidade);
    Optional<T> getId(ID id);
    List<T> getAll();
    void remove(ID id) throws EntityNotFoundException;
}
