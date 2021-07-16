export const enum NodeType {
  FRAGMENT,
  ELEMENT,
  ATTRIBUTE,
  TEXT,
  ARGUMENT,
  FUNCTION,
  PLURAL,
  SELECT,
  SELECT_ORDINAL,
  SELECT_CASE,
  OCTOTHORPE,
}

export type ContainerNode =
    | IFragmentNode
    | IElementNode
    | IAttributeNode
    | ISelectNode
    | ISelectCaseNode
    | IFunctionNode;

export type Node =
    | ContainerNode
    | IArgumentNode
    | IOctothorpeNode
    | ITextNode;

export interface INode {
  nodeType: NodeType;
  parent: ContainerNode | null;
  start: number;
  end: number;
}

export interface IContainerNode extends INode {
  children: Array<Node>;
}

export interface IFragmentNode extends IContainerNode {
  nodeType: NodeType.FRAGMENT,
}

export interface IElementNode extends IContainerNode {
  nodeType: NodeType.ELEMENT;
  tagName: string;
  attrs: Array<IAttributeNode>;
}

export interface IAttributeNode extends IContainerNode {
  nodeType: NodeType.ATTRIBUTE;
  parent: IElementNode | null;
  name: string;
}

export interface ISelectNode extends IContainerNode {
  nodeType: NodeType.PLURAL | NodeType.SELECT | NodeType.SELECT_ORDINAL;
  argName: string;
  children: Array<ISelectCaseNode>;
  pluralOffset?: number;
}

export interface ISelectCaseNode extends IContainerNode {
  nodeType: NodeType.SELECT_CASE;
  parent: ISelectNode | null;
  key: string;
}

export interface IFunctionNode extends IContainerNode {
  nodeType: NodeType.FUNCTION;
  name: string;
  argName: string;
}

export interface IArgumentNode extends INode {
  nodeType: NodeType.ARGUMENT;
  name: string;
}

export interface IOctothorpeNode extends INode {
  nodeType: NodeType.OCTOTHORPE;
}

export interface ITextNode extends INode {
  nodeType: NodeType.TEXT;
  value: string;
}
