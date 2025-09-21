package Exercicio07;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class InMemoryRepository <T extends Identifiable<ID>, ID> implements IRepository <T, ID>{
    private final Map<ID, T> storage = new HashMap<>();

    @Override
    public void save(T entidade) {
        storage.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> getId(ID id) {
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public List<T> getAll() {
        return List.copyOf(storage.values());
    }

    @Override
    public void remove(ID id) {
        if (!storage.containsKey(id)) {
            throw new EntityNotFoundException("Entidade com ID " + id + " não encontrada.");
        }
        storage.remove(id);
    }
}
