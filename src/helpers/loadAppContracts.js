const contractListPromise = import("../contractAbi/Tasera.json");

export const loadAppContracts = async () => {
  const config = {};
  config.deployedContracts = (await contractListPromise).default ?? {};
  return config;
};