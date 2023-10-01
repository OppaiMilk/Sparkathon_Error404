import 'antd/dist/antd.min.js';
import { TextField,InputAdornment,Icon,IconButton } from "@mui/material"
import { Input } from "antd"
import styles from './index.module.css';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';


const ProfilInfo = () => {
  	
	const [token, setToken] = useState(0.8);
	const [coin, setCoin] = useState(1500);


    const collectReward = () => {
        // You can add logic here to calculate and assign rewards
        setToken(token + (coin/1000));
		setCoin(0)
      };

	const successful = () => {
		alert("successful");
	  };
	return (

		
    		<div className={styles.profilInfo}>
      			<div className={styles.profilInfoChild} />
      			<div className={styles.tetrasolanaAllRights}>© 2023 TetraSOlana. All rights reserved.</div>
      			<div className={styles.footer}>
        				<div className={styles.aboutParent}>
          					<b className={styles.about}>About</b>
          					<div className={styles.product}>Product</div>
          					<div className={styles.resource}>Resource</div>
          					<div className={styles.termCondition1}>{`Term & Condition`}</div>
          					<div className={styles.faq}>FAQ</div>
        				</div>
        				<div className={styles.theBestNftMarketplaceWebsiParent}>
          					<div className={styles.theBestNft}>The best NFT marketplace website in the world and feel your experience in selling or buy our work.</div>
          					<Link href='/'>
							<b className={styles.tetrasolana}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
							  </Link>
        				</div>
        				<div className={styles.contactParent}>
          					<b className={styles.contact}>Contact</b>
          					<div className={styles.div}>+012 3456789</div>
          					<div className={styles.tetrasolanagmailcom}>tetrasolana@gmail.com</div>
          					<div className={styles.youtubeParent}>
							  <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/youtube.svg" />
																																</Link>
																																<Link href='https://discord.gg/DwkKuhgg'>
																																<img className={styles.youtubeIcon1} alt="" src="/image/discord.svg" />
																																</Link>
																																<Link href='https://www.youtube.com/watch?v=Wjavakm7gMQ'>
                                            																						<img className={styles.youtubeIcon1} alt="" src="/image/instagram.svg" />
																																</Link>
          					</div>
        				</div>
      			</div>
      			<div className={styles.profilInfoItem} />
      			<div className={styles.frameParent}>
        				<div className={styles.frameWrapper}>
          					<div className={styles.frameDiv}>
            						<div className={styles.cardClickParent}>
              							<div className={styles.cardClick1} />
              							<div className={styles.profilePictureParent}>
                								<img className={styles.profilePictureIcon} alt="" src="/image/Profile Picture.svg" />
                								<div className={styles.groupParent}>
                  									<div className={styles.frameGroup}>
                    										<div className={styles.vanDarkholmeWrapper}>
                      											<b className={styles.vanDarkholme}>Van Darkholme</b>
                    										</div>
                    										<div className={styles.loidonsafWrapper}>
                      											<div className={styles.vanDarkholme}>@loidonsaf</div>
                    										</div>
                    										<div className={styles.solanaSolLogo1Parent}>
                      											<img className={styles.solanaSolLogo1Icon1} alt="" src="/image/solana-sol-logo 1.png" />
                      											<b className={styles.sol}>{token} SOL</b>
                    										</div>
                  									</div>
                  									<div className={styles.action}>
                    										<div className={styles.claimRewardWrapper}>
															<button onClick={collectReward} className={styles.game}>Claim Reward</button>                    										</div>
                    										<Link href='/Template'>
              							<div className={styles.swapWalletWrapper}>
                								<div className={styles.game}>Swap Wallet</div>
              							</div>
										  </Link>
                  									</div>
                  									<div className={styles.goldCoinMoneySymbolIconPnParent}>
                    										<img className={styles.goldCoinMoneySymbolIconPn1} alt="" src="/image/gold-coin-money-symbol-icon-png 1.png" />
                    										<b className={styles.coins}>{coin} coins</b>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.frameParent1}>
          					<div className={styles.groupParent1}>
            						<div className={styles.groupDiv}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="/image/User.png" />
                								<b className={styles.profileInfo}>Profile Info</b>
                								<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="/image/Setting_line_light.png" />
                								<div className={styles.accountSettings}>Account Settings</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="/image/Bell_light.png" />
                								<div className={styles.accountSettings}>Notification Settings</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
										<Link href='/CreateArt'>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="/image/img_alt_light.png" />
                								<div className={styles.accountSettings}>Create Artwork</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
              							</div>
										  </Link>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="/image/Wallet_light.png" />
                								<div className={styles.accountSettings}>Wallet Info</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
                								</div>
                								<div className={styles.groupChild} />
              							</div>

										<Link href='/GetVerified'>
              							<div className={styles.frameParent2}>
                								<div className={styles.userParent}>
                  									<img className={styles.userIcon1} alt="" src="/image/Check_ring_light.png" />
                  									<div className={styles.accountSettings}>Get Verified</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
                								</div>
                								<div className={styles.groupChild} />
              							</div>
										  </Link>
              							<div className={styles.frameParent2}>
                								<div className={styles.userParent}>
                  									<img className={styles.userIcon1} alt="" src="/image/Sign_in_squre_light.png" />
                  									<div className={styles.accountSettings}>Log Out</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="/image/Expand_right_light.png" />
                								</div>
                								<div className={styles.groupChild} />
              							</div>
            						</div>
            						<div className={styles.cardUnClickParent}>
              							<div className={styles.cardUnClick1} />
              							<div className={styles.frameParent8}>
                								<div className={styles.frameParent9}>
                  									<div className={styles.groupParent2}>
                    										<div className={styles.nameParent}>
                      											<b className={styles.name}>Name</b>
                      											<TextField className={styles.frameTextfield} color="primary" label="Van Darkholme" sx={{ width: 342 }} variant="outlined" />
                    										</div>
                    										<div className={styles.nameParent}>
                      											<b className={styles.name}>Email</b>
                      											<Input.TextArea className={styles.frameInputtextarea} placeholder="van@gmail.com" style={{ width: "342px" }} />
                    										</div>
                  									</div>
                  									<div className={styles.groupParent2}>
                    										<div className={styles.nameParent}>
                      											<b className={styles.name}>Username</b>
                      											<Input.TextArea className={styles.frameInputtextarea} placeholder="@loidonsaf" style={{ width: "342px" }} />
                    										</div>
                    										<div className={styles.phoneNumberParent}>
                      											<b className={styles.phoneNumber}>Phone Number</b>
                      											<div className={styles.wrapper}>
                        												<div className={styles.claimReward}>12-3459789</div>
                      											</div>
                      											<div className={styles.autyz4pk2snhqtvw7gv61Parent}>
                        												<img className={styles.autyz4pk2snhqtvw7gv61Icon1} alt="" src="/image/autyz4pk2snhqtvw7gv6 1.png" />
                        												<div className={styles.parent}>
                          													<div className={styles.claimReward}>60+</div>
                          													<img className={styles.userIcon1} alt="" src="/image/Expand_down_light.png" />
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.groupParent2}>
                    										<div className={styles.nameParent}>
                      											<b className={styles.name}>Change Password</b>
                      											<textarea className={styles.groupChild5} />
                    										</div>
                    										<div className={styles.nameParent}>
                      											<h6 className={styles.repeatPassword1}>Repeat Password</h6>
                      											<TextField className={styles.frameTextfield} color="primary" sx={{ width: 342 }} variant="outlined" />
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.button}>
												<button onClick={successful} className={styles.claimReward}>Save Changes</button>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.header}>
          					<div className={styles.marketplaceParent}>
							  <Link href='/MarketPlace'>
						<div className={styles.conectWallet}>Marketplace</div>
						</Link>
						<Link href='/Tetris'>                          
						<div className={styles.conectWallet}>Game</div>
						</Link>
						<Link href='/'>
						<div className={styles.conectWallet}>FAQ</div>
						</Link>
						<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        					<WalletMultiButton></WalletMultiButton>
							</div>     
							<Link href='/'>
            						<div className={styles.ellipseParent}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.rectangleDiv} />
            						</div>
									</Link>
          					</div>
							<Link href='/'>
          					<b className={styles.tetrasolana1}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
							  </Link>
          					<div className={styles.search}>
            						<div className={styles.searchChild} />
            						<div className={styles.searchParent}>
              							<img className={styles.searchIcon1} alt="" src="/image/search.svg" />
              							<div className={styles.claimReward}>Search items and collections</div>
            						</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
				  export default dynamic (() => Promise.resolve(ProfilInfo	), {ssr: false} )
      			