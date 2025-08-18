SELECT shippers.CompanyName,
  SUM(
    `order details`.UnitPrice * `order details`.Quantity * (1 - `order details`.Discount)
  ) AS TotalPriceShipped
FROM shippers,
  `order details`,
  orders
WHERE shippers.ShipperID = orders.ShipVia
  AND orders.OrderID = `order details`.OrderID
GROUP BY shippers.CompanyName;