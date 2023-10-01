import 'antd/dist/antd.min.css';
import { TextField,InputAdornment,Icon,IconButton } from "@mui/material"
import { Input } from "antd"
import styles from './index.module.css';


const ProfilInfo = () => {
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
          					<b className={styles.tetrasolana}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
        				</div>
        				<div className={styles.contactParent}>
          					<b className={styles.contact}>Contact</b>
          					<div className={styles.div}>+012 3456789</div>
          					<div className={styles.tetrasolanagmailcom}>tetrasolana@gmail.com</div>
          					<div className={styles.youtubeParent}>
            						<img className={styles.youtubeIcon1} alt="" src="youtube.svg" />
            						<img className={styles.youtubeIcon1} alt="" src="discord.svg" />
            						<img className={styles.youtubeIcon1} alt="" src="instagram.svg" />
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
                								<img className={styles.profilePictureIcon} alt="" src="Profile Picture.png" />
                								<div className={styles.groupParent}>
                  									<div className={styles.frameGroup}>
                    										<div className={styles.vanDarkholmeWrapper}>
                      											<b className={styles.vanDarkholme}>Van Darkholme</b>
                    										</div>
                    										<div className={styles.loidonsafWrapper}>
                      											<div className={styles.vanDarkholme}>@loidonsaf</div>
                    										</div>
                    										<div className={styles.solanaSolLogo1Parent}>
                      											<img className={styles.solanaSolLogo1Icon1} alt="" src="solana-sol-logo 1.png" />
                      											<b className={styles.sol}>0.8 SOL</b>
                    										</div>
                  									</div>
                  									<div className={styles.action}>
                    										<div className={styles.claimRewardWrapper}>
                      											<div className={styles.claimReward}>Claim Reward</div>
                    										</div>
                    										<div className={styles.swapWalletWrapper}>
                      											<div className={styles.claimReward}>Swap Wallet</div>
                    										</div>
                  									</div>
                  									<div className={styles.goldCoinMoneySymbolIconPnParent}>
                    										<img className={styles.goldCoinMoneySymbolIconPn1} alt="" src="gold-coin-money-symbol-icon-png 1.png" />
                    										<b className={styles.coins}>1200 coins</b>
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
                								<img className={styles.userIcon1} alt="" src="User.svg" />
                								<b className={styles.profileInfo}>Profile Info</b>
                								<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="Setting_line_light.svg" />
                								<div className={styles.accountSettings}>Account Settings</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="Bell_light.svg" />
                								<div className={styles.accountSettings}>Notification Settings</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="Img_alt_light.svg" />
                								<div className={styles.accountSettings}>Create Artwork</div>
                								<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
              							</div>
              							<div className={styles.groupChild} />
            						</div>
            						<div className={styles.frameParent2}>
              							<div className={styles.userParent}>
                								<img className={styles.userIcon1} alt="" src="Wallet_light.svg" />
                								<div className={styles.accountSettings}>Wallet Info</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
                								</div>
                								<div className={styles.groupChild} />
              							</div>
              							<div className={styles.frameParent2}>
                								<div className={styles.userParent}>
                  									<img className={styles.userIcon1} alt="" src="Check_ring_light.svg" />
                  									<div className={styles.accountSettings}>Get Verified</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
                								</div>
                								<div className={styles.groupChild} />
              							</div>
              							<div className={styles.frameParent2}>
                								<div className={styles.userParent}>
                  									<img className={styles.userIcon1} alt="" src="Sign_in_squre_light.svg" />
                  									<div className={styles.accountSettings}>Log Out</div>
                  									<img className={styles.expandRightLightIcon7} alt="" src="Expand_right_light.svg" />
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
                        												<img className={styles.autyz4pk2snhqtvw7gv61Icon1} alt="" src="autyz4pk2snhqtvw7gv6 1.png" />
                        												<div className={styles.parent}>
                          													<div className={styles.claimReward}>60+</div>
                          													<img className={styles.userIcon1} alt="" src="Expand_down_light.svg" />
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
                  									<div className={styles.claimReward}>Save Changes</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.header}>
          					<div className={styles.marketplaceParent}>
            						<div className={styles.claimReward}>Marketplace</div>
            						<div className={styles.claimReward}>Game</div>
            						<div className={styles.claimReward}>FAQ</div>
            						<div className={styles.selectWalletWrapper}>
              							<div className={styles.claimReward}>Select Wallet</div>
            						</div>
            						<div className={styles.ellipseParent}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.rectangleDiv} />
            						</div>
          					</div>
          					<b className={styles.tetrasolana1}>
            						<span>Tetra</span>
            						<span className={styles.so}>SO</span>
            						<span>lana</span>
          					</b>
          					<div className={styles.search}>
            						<div className={styles.searchChild} />
            						<div className={styles.searchParent}>
              							<img className={styles.searchIcon1} alt="" src="search.svg" />
              							<div className={styles.claimReward}>Search items and collections</div>
            						</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
      			export default ProfilInfo;
      			