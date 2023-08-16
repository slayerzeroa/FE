# FE


Structure

FE
----- server
----- web


# Solidity 파일 Deploy 순서

1. IPFSStorage 
2. PompayToken(ajoulinka.sol 내)
3. status (ajoulinka.sol 내)
4. EtherSwap

# 실행 방법
(1) IPFSStorage Deploy 후, 해당 주소를 ajoulinka.sol 파일의 line 88에 할당
IPFSStorage ipfsStorage = IPFSStorage(DeployedAddress);
![image](https://github.com/slayerzeroa/FE/assets/77741158/93752f7e-d376-43fc-82be-02e41db94c96)
ex. Deploy한 IPFSStorage 컨트랙트 주소 : 0x16bBbD5bF6a7FDF52F896cC51162783e9e099179 라면 
    IPFSStorage ipfsStorage = IPFSStorage(0x0fC5025C764cE34df352757e82f7B5c4Df39A836);

(2) PompayToken Deploy 위한 입력 값 : pompay, PMP
![image](https://github.com/slayerzeroa/FE/assets/77741158/d90f2877-686d-4184-8c3f-208e8906f4c5)

(3) status Deploy 위한 입력 값 : PompayToken Deploy 주소
![image](https://github.com/slayerzeroa/FE/assets/77741158/c00ae68e-0ea9-477e-ade6-a61086f3f667)
ex. Deploy한 PompayToken 컨트랙트 주소 : 0xd9145CCE52D386f254917e481eB44e9943F39138

(4) EtherSwap Deploy 위한 입력 값 : status Deploy 주소
동일한 방식
