package com.gabriel.sistemaVendas.Service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.gabriel.sistemaVendas.entities.Sale;

public interface SaleService {
	Page<Sale> findSales(String minDate, String maxDate,Pageable pageable);
}
