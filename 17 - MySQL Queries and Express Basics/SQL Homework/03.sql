SELECT shippers.CompanyName,
  COUNT(orders.OrderID) AS TotalOrdersShipped
FROM shippers,
  orders
WHERE shippers.ShipperID = orders.ShipVia
GROUP BY shippers.CompanyName;