import "@storyprotocol/contracts/contracts/modules/licensing/LicensingModule.sol";
import "@storyprotocol/periphery/contracts/StoryProtocolGateway.sol";
import "@storyprotocol/contracts/contracts/modules/licensing/PILPolicyFrameworkManager.sol";
import "@storyprotocol/contracts/contracts/registries/IPAssetRegistry.sol";

contract ModelNFTLiecnse{
   
    bytes ROYALTY_CONTEXT = "This is loyalty fee for the license.";
    StoryProtocolGateway public SPG;
    address public ROYALTY_POLICY;
    uint256 public MINTING_FEE;
    address public MINTING_FEE_TOKEN;
  
    constructor(address spg, address royaltyPolicy, uint256 mintingFee, uint256 mintingFeeToken) {
        SPG = spg;
        ROYALTY_POLICY = royaltyPolicy;
        MINTING_FEE = mintingFee;
        MINTING_FEE_TOKEN = mintingFeeToken;
    }
  
    function createLicense(
  	    PILPolicy memory pilPolicy,
        address licensorIpId
	) {
        spg.mintLicensePIL(pilPolicy, licensorIpId, 1, ROYATY_CONTEXT, MINTING_FEE, MINTING_FEE_TOKNE);
    }
}
