import { Option } from "../../components/Option";
import { Header } from "../../components/Header";
import {Section} from "../../components/Section";
import { Input } from "../../components/Input";
import {Price} from "../../components/Price";
import {FiSearch} from "react-icons/fi"
import { Container } from "./styles";

export function Home(){
  return(
      <Container>
          <Header/>
          <Input placeholder="Search name" icon={FiSearch}/>

          <div>
          <Section >
            <h1>DRINKS</h1>
            <Option 
              title="Capuccino"
              text="The best Cappuccino of city! If you dont believe me, verify yourself"
              />
            <Price title="R$12,00"/>
            <Option 
              title="Mocha"
              text="The best Capuccino of city! If you dont believe me, verify yourself"
              />
            <Price title="R$12,00"/>
            <Option 
              title="Espress"
              text="The best Express to you start your day! If you dont believe me, verify yourself"
              />
            <Price title="R$8,00"/>
            <Option 
              title="Chocolate Caliente"
              text="Hmmmmm chocolate SZ"
              />
            <Price title="R$10,00"/>
          </Section>

          <Section>
            <h1>CANDY</h1>
            <Option 
              title="Chocolate Pie"
              text="It's my favorite"
              />
            <Price title="R$9,00"/>
            <Option 
              title="Donuts"
              text="For you eat with your friends"
              />
            <Price title="R$6,00"/>
            <Option 
              title="Brownie"
              text="Perfect to a good breakfast and great work day! If you dont believe me, verify yourself"
              />
            <Price title="R$6,00"/>
            <Option 
              title="Cookie "
              text="Chocolate cookie or strawberry. You decid "
              />
            <Price title="R$5,00"/>
          </Section>

          <Section >
            <h1>OTHERS</h1>
            <Option 
              title="Cheese Bread"
              text="The best cheese breads in the world!"
              />
            <Price title="R$8,00"/>
            <Option 
              title="Pizza"
              text="They all have a lot of cheese!"
              />
            <Price title="R$9,00"/>
            <Option 
              title="Sandwiches"
              text="Traditional sandwiches"
              />
            <Price title="R$6,00"/>
            <Option 
              title="Humbúrguer"
              text="Our humbúrguer pressed on a very hot plate. Ideal for those who are not hungry"
              />
            <Price title="R$8,00"/>
          </Section>
          </div>
      </Container>
    )
};