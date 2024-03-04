import { EntityTypes } from "./interfaces/entity";
import { entityMapping } from "./EntityComponentFactory";

interface TreeNode {
  type: EntityTypes;
  children: TreeNode[];
  parentType?: EntityTypes | null;
}

export class EntitiesTree {
  private static instance: EntitiesTree;
  root: TreeNode;
  private nodesMap: Map<EntityTypes, TreeNode>;

  private constructor(rootType: EntityTypes) {
    this.root = { type: rootType, children: [] };
    this.nodesMap = new Map([[rootType, this.root]]);
  }

  public static getInstance(): EntitiesTree {
    if (!EntitiesTree.instance) {
      EntitiesTree.instance = new EntitiesTree(EntityTypes.Stage);
      Object.values(EntityTypes).forEach((type) => {
        const entity = entityMapping[type];
        const parentType = entity.parentType;
        if (parentType) {
          EntitiesTree.instance.addChild(parentType, type);
        }
      });
    }
    return EntitiesTree.instance;
  }

  addChild(parentType: EntityTypes, childType: EntityTypes) {
    const parentNode = this.nodesMap.get(parentType);
    if (parentNode) {
      const childNode: TreeNode = { type: childType, children: [], parentType: parentNode.type };
      parentNode.children.push(childNode);
      this.nodesMap.set(childType, childNode);
    } else {
      console.error(`Parent type ${parentType} not found`);
    }
  }

  getChildren(type: EntityTypes): EntityTypes[] {
    const node = this.findNode(type);
    return node ? node.children.map((node) => node.type) : [];
  }

  findNode(type: EntityTypes): TreeNode | null {
    return this.nodesMap.get(type) || null;
  }

  getHierarchyList(type: EntityTypes): EntityTypes[] {
    let node = this.findNode(type);
    const path: EntityTypes[] = [];

    while (node) {
      path.unshift(node.type);
      node = node.parentType ? this.findNode(node.parentType) : null;
    }

    return path;
  }
}
