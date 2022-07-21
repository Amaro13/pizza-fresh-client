import * as S from "./style"; // importing all the styles from style as S
import { ReactComponent as Search } from "assets/icons/search.svg"; // importing the icon to be used in the Search below on line 17
import Menu from "components/Menu"; //importing from the menu
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { DateTime } from "luxon";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

	return (
		<S.Home>
			<Menu active={RoutePath.HOME} navItems={navigationItems} />
			<S.HomeContent>
				<header>
					<S.HomeHeaderDetails>
						<div>
							<S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
							<S.HomeHeaderDetailsDate>{dateDescription}</S.HomeHeaderDetailsDate>
						</div>
						<S.HomeHeaderDetailsSearch>
							<Search />
							<input type="text" placeholder="Procure pelo sabor" />
						</S.HomeHeaderDetailsSearch>
					</S.HomeHeaderDetails>
				</header>
				<div>
					<S.HomeProductTitle>
						<b>Pizzas</b>
					</S.HomeProductTitle>
					<S.HomeProductList>
						<p>Lista de produtos aqui</p>
					</S.HomeProductList>
				</div>
			</S.HomeContent>
			<aside>
				<p>Detalhes dos pedidos aqui</p>
			</aside>
		</S.Home>
	);
};

export default Home;