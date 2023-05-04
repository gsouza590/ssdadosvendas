package com.gabriel.sistemaVendas.Service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.gabriel.sistemaVendas.entities.Sales;

public interface SaleService {
	Page<Sales> findSales(String minDate, String maxDate,Pageable pageable);
}
