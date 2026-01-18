import { db } from "@/app/firebase/firebase";
import { getCurrentUser } from "@/app/firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  DocumentData,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const POSTS_COLLECTION = "posts";
const ADMIN_UID = process.env.ADMIN_UID;

function checkAdmin(): string {
  const user = getCurrentUser();
  if (!user || user.uid !== ADMIN_UID) {
    throw new Error("Unauthorized: only admin can perform this action");
  }
  return user.uid;
}

function getPostRef(postId: string) {
  return doc(db, POSTS_COLLECTION, postId);
}

export async function createPost(data: {
  title: string;
  content: string;
}): Promise<string> {
  checkAdmin();
  const docRef = await addDoc(collection(db, POSTS_COLLECTION), {
    ...data,
    authorUID: ADMIN_UID,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updatePost(
  postId: string,
  data: Partial<{ title: string; content: string }>,
): Promise<void> {
  checkAdmin();
  await updateDoc(getPostRef(postId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deletePost(postId: string): Promise<void> {
  checkAdmin();
  const docRef = getPostRef(postId);
  await deleteDoc(docRef);
}

export async function getPosts(): Promise<DocumentData[]> {
  const q = query(
    collection(db, POSTS_COLLECTION),
    orderBy("createdAt", "desc"),
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getPost(postId: string): Promise<DocumentData> {
  const docRef = getPostRef(postId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error(`Document ${postId} does not exist`);
  }

  return { id: docSnap.id, ...docSnap.data() };
}
