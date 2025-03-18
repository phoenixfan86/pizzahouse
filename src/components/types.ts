export interface Pizza {
  _id: string;
  name: string;
  price: number;
  ingredients?: string[];
  image: string;
}

export interface PizzaProps {
  _id: string;
  name: string;
  price: number;
  ingredients?: string[];
  image: string;
}

export interface ButtonProps {
  href?: string
  target?: string
  label: string
  icon?: string
  classes?: string
}


