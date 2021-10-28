package com.example.pi.Repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.pi.entities.Coffee;




@Repository
public interface CoffeeRepository extends CrudRepository<Coffee,Integer> {

}
