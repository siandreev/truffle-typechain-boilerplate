/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface IERC1155MetadataURIContract
  extends Truffle.Contract<IERC1155MetadataURIInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<IERC1155MetadataURIInstance>;
}

export interface ApprovalForAll {
  name: "ApprovalForAll";
  args: {
    account: string;
    operator: string;
    approved: boolean;
    0: string;
    1: string;
    2: boolean;
  };
}

export interface TransferBatch {
  name: "TransferBatch";
  args: {
    operator: string;
    from: string;
    to: string;
    ids: BN[];
    values: BN[];
    0: string;
    1: string;
    2: string;
    3: BN[];
    4: BN[];
  };
}

export interface TransferSingle {
  name: "TransferSingle";
  args: {
    operator: string;
    from: string;
    to: string;
    id: BN;
    value: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
  };
}

export interface URI {
  name: "URI";
  args: {
    value: string;
    id: BN;
    0: string;
    1: BN;
  };
}

type AllEvents = ApprovalForAll | TransferBatch | TransferSingle | URI;

export interface IERC1155MetadataURIInstance extends Truffle.ContractInstance {
  /**
   * Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.
   */
  balanceOf(
    account: string,
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.
   */
  balanceOfBatch(
    accounts: string[],
    ids: (number | BN | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  /**
   * Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.
   */
  isApprovedForAll(
    account: string,
    operator: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.
   */
  safeBatchTransferFrom: {
    (
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.
   */
  safeTransferFrom: {
    (
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.
   */
  setApprovalForAll: {
    (
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
   */
  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  /**
   * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
   */
  uri(
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    /**
     * Returns the amount of tokens of token type `id` owned by `account`. Requirements: - `account` cannot be the zero address.
     */
    balanceOf(
      account: string,
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}. Requirements: - `accounts` and `ids` must have the same length.
     */
    balanceOfBatch(
      accounts: string[],
      ids: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    /**
     * Returns true if `operator` is approved to transfer ``account``'s tokens. See {setApprovalForAll}.
     */
    isApprovedForAll(
      account: string,
      operator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}. Emits a {TransferBatch} event. Requirements: - `ids` and `amounts` must have the same length. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the acceptance magic value.
     */
    safeBatchTransferFrom: {
      (
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Transfers `amount` tokens of token type `id` from `from` to `to`. Emits a {TransferSingle} event. Requirements: - `to` cannot be the zero address. - If the caller is not `from`, it must be have been approved to spend ``from``'s tokens via {setApprovalForAll}. - `from` must have a balance of tokens of type `id` of at least `amount`. - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the acceptance magic value.
     */
    safeTransferFrom: {
      (
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Grants or revokes permission to `operator` to transfer the caller's tokens, according to `approved`, Emits an {ApprovalForAll} event. Requirements: - `operator` cannot be the caller.
     */
    setApprovalForAll: {
      (
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    /**
     * Returns the URI for token type `id`. If the `\{id\}` substring is present in the URI, it must be replaced by clients with the actual token type ID.
     */
    uri(
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
