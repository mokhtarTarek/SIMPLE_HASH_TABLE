import { MyHashTable } from "./simpleHashTable";
import { EnhHashTable } from "./enhanHashTable";

const ht = new EnhHashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
ht.set("ǻ", 110);

console.log(ht);
console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]
console.log(ht.get("à")); // [ 'Spain', 110 ]

console.log(ht.remove("Spain")); // true
console.log(ht.get("Spain")); // undefined
console.log(ht.display()); // undefined
