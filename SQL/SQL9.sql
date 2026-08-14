SELECT
    e.first_name || ' ' || e.last_name AS employee_name,
    e.salary AS employee_salary,
    COALESCE(m.first_name || ' ' || m.last_name, 'No manager') AS manager_name,
    m.salary AS manager_salary
FROM employees e
LEFT JOIN employees m
    ON e.manager_id = m.id;    