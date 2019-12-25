## regex
### all special charactor except '

```
[^\w']
```

## java
### split

```java
// split by whitespace
str.split("\\s")
```

## shell
### divide csv column by awk

```
pending.txt
ITE00100554,18000101,TMAX,-75,,,E,
```

> column 4 divide by 10

```bash
awk -F , '{printf "%s,%s,%s,%s", $1,$2,$3,$4/10}' pending.txt 
```