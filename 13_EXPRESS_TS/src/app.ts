// 1 - Starting project
console.log("Express + TS!!");

// 2 - init express
import express, { Request, Response, NextFunction } from "express";

const app = express();

// 3 - POST route
app.use(express.json());

// 11 - middlewre to all routes
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

app.get("/", (req, res) => {
  return res.send("Hello express!");
});

// 3 - POST route
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Product added!");
});

// 4 - All method route
app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    return res.send("Register inserted");
  } else if (req.method === "GET") {
    return res.send("Read some register!");
  } else {
    return res.send("Action can not be done!");
  }
});

// 5 - Express interfaces
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Using interfaces");
});

// 6 - Sendind responses with JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Deftones tshirt",
    price: 59.99,
    color: "Black",
    sizes: ["P", "M", "G"],
  });
});

// 7 - Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Deftones tshirt",
      price: 60,
    };

    return res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found!" });
  }
});

// 8 - Complex routes
app.get(
  "/api/product/:productId/review/:reviewId",
  (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.productId;
    const reviewId = req.params.reviewId;

    return res.send(
      `Accessing the review ${reviewId} from product ${productId}`
    );
  }
);

// 9 - router handler
function getUser(req: Request, res: Response) {
  console.log(`Getting user with ID: ${req.params.id}`);

  return res.send("User was found!");
}

app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Continue!");
    next();
  } else {
    console.log("Restricted access!");
    next();
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Welcome to admin area" });
});

// 12 - req & res with generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

// 13 - handling errors
app.get("/api/error", (req: Request, res: Response) => {
  try {
    // Our logic
    throw new Error("Something went wrong!");
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
});

app.listen(3000, () => {
  console.log("Express app working!");
});
