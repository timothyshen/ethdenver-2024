import "hardhat/types/config";
import "hardhat/types/runtime";
import { FundLinkReceipt } from "./types";
declare module "hardhat/types/runtime" {
    interface HardhatRuntimeEnvironment {
        fundLink: (hre: HardhatRuntimeEnvironment, contractAddress: string, fundAmount?: string, linkAddress?: string) => Promise<FundLinkReceipt>;
    }
}
//# sourceMappingURL=type-extensions.d.ts.map