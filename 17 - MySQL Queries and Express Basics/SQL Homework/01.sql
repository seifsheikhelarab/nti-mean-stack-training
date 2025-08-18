SELECT Customers.CompanyName,
  SUM(
    `Order Details`.UnitPrice * `Order Details`.Quantity * (1 - `order details`.Discount)
  ) AS TotalPrice
FROM Customers,
  Orders,
  `Order Details`
WHERE Customers.CustomerID = Orders.CustomerID
  AND Orders.OrderID = `Order Details`.OrderID
GROUP BY Customers.CompanyName;