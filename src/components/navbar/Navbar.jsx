import React, { useState } from "react";

import "./navbar.css";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as Navlink } from 'react-router-dom'
import ButtonExit from "../ButtonExit/ButtonExit";
import { useSelector, useDispatch } from 'react-redux'
import userActions from "../../redux/actions/userActions"
import Swal from 'sweetalert2'





const SideNavBar = () => {
	const dispatch = useDispatch()
	const [isExpanded, setExpendState] = useState(false);
	const { online, role, token } = useSelector(state => state.user)
	const { logout } = userActions


	function signOut() {
		Swal.fire({
			title: 'Do you want to exit?',
			text: "You will need to log in again later.",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, log out!'
		})
			.then((result) => {
				if (result.isConfirmed) {
					dispatch(logout(token))
					Swal.fire(
						'Logged out!',
						'You have been logged out',
						'success'
					)
				}
			})
	}




	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Barra de Navegacion</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>


				<div className="nav-menu">
					{!online && (
						<>
							<LinkRouter to="/SignIn">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/iniciarsesion.png" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/SignUp">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/registrarse.png" alt="" />
								</button>
								</div>
							</LinkRouter>
						</>
					)}



					{online && (
						<LinkRouter to='/Profile' text='MY PROFILE' >
							<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/perfil123.png" alt="" />
							</button>
							</div>


						</LinkRouter>
					)}
					




					{online && role === 'admin' && (
						<>
							<LinkRouter to="/Mycities">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/nuevaciudad.png" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/MyHotels">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/nuevohotel.png" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/Cities">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/tierra.svg" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/Hotels">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/hotel.svg" alt="" />
								</button>
								</div>
							</LinkRouter>

						</>
					)}

					{online && (

						<>
				<LinkRouter to='/newitinerary' classN='btn3' text='NEW ITINERARY' >
				<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/itinerarionuevo.png" alt="" />
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/MyTineraries' text='MY ITINERARY' >
							<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/itinerariosad.png" alt="" />
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/MyShows' text='MY SHOWS' >
							<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/show123.png" alt="" />
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/newShow' text='MY SHOWS' >
							<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/show123.png" alt="" />
								</button>
								</div>
							</LinkRouter>

							<div  className={isExpanded ? "menu-item" : "menu-item menu-item-NX" } >
						<ButtonExit  fx={signOut} text='LOG OUT' />

					</div>
						</>
					)}






				</div>
			</div>


			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"

							alt=""
							srcset=""
						/>
					</div>
				)}

			</div>
		</div>
	);
};

export default SideNavBar;