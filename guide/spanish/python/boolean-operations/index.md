---
title: Python Boolean Operations
localeTitle: Operaciones Booleanas Python
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) , [`or`](https://docs.python.org/3/reference/expressions.html#or) , [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - Operaciones Booleanas](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

Estas son las operaciones booleanas, ordenadas por prioridad ascendente:

Operacion | Resultado | Notas  
\--------- | ------------------------------------ | -----  
x o y | si x es falso, entonces y, si no x | (1)  
x y y | si x es falso, entonces x, si no y | (2)  
no x  | si x es falso, entonces verdadero, sino falso | (3)

**Notas:**

1.  Este es un operador de cortocircuito, por lo que solo evalúa el segundo argumento si el primero es Falso.
2.  Este es un operador de cortocircuito, por lo que solo evalúa el segundo argumento si el primero es Verdadero.
3.  no tiene una prioridad más baja que los operadores no booleanos, por lo que no a == b se interpreta como no (a == b), y a == not b es un error de sintaxis.

## Ejemplos:

### `not`
```
>>> not True 
 False 
 >>> not False 
 True 
```

### `and` :
```
>>> True and False    # Evalúa el segundo argumento. 
 False 
 >>> False and True    # No evalúa el segundo argumento. 
 False 
 >>> True and True     # Evalúa el segundo argumento. 
 True 
```

### `or` :
```
>>> True or False    # No evalúa el segundo argumento. 
 True 
 >>> False or True    # Evalúa el segundo argumento. 
 True 
 >>> False or False   # Evalúa el segundo argumento. 
 False 

```
