import { useAccount, ConnectButton } from "@web3modal/react";

export const WalletConnectButton = () => {
  const { account } = useAccount();
  if (account.isConnected) return null;
  return <ConnectButton />;
};
