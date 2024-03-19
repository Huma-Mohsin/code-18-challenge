// //Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.

//solution:-
//object is simple representaion of something with its properties.
const smartphone = {
  //object of a smartphone(Main object serves as Big BOx which can hold small objects in it.)
  brand: "Samsung",
  "Product Name": "Galaxy A32",
  "Model Name": "SM-A325F",
  "Serial Number": "UI125P896GL",
  "Android Version": 13,
  BatteryInformation: {
    //contains other smaaler objects like small box in a big box
    Type: "Li-Ion 5000 mAh, non-removable",
    Charging: "15W wired",
  },
  Display: {
    Type: "Super AMOLED, 90Hz, 800 nits (HBM)",
    Size: "6.4 inches, 98.9 cm2",
    Protection: "	Corning Gorilla Glass 5",
  },
  Miscellaneous: {
    Colors: "Awesome Black, Awesome White, Awesome Blue, Awesome Violet",
    Models: "SM-A325F, SM-A325F/DS, SM-A325M, SM-A325N",
    "SAR EU": "0.45 W/kg (head)     1.30 W/kg (body) ",
  },
}; //scope of big box closed here.
console.log(smartphone);
//Author- HUMA MOHSIN