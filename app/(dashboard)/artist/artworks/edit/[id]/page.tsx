import React from "react";
import { getArtworkById } from "@/actions/artwork";
import ArtworkForm from "@/components/artist/form/ArtworkForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EditPageProps {
  params: { id: string };
}

const EditPage = async ({ params }: EditPageProps) => {
  const art = await getArtworkById(params.id);

  return (
    <div>
      <div className="flex justify-start pb-5">
        <Button asChild variant="secondary">
          <Link href="/artist/artworks">Go Back</Link>
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Update Artwork</h1>
      <ArtworkForm
        id={params.id}
        initialValues={{
          title: art.title,
          description: art.description,
          categoryId: art.categoryId,
          imageUrls: art.images.map((i) => i.url),
        }}
      />
    </div>
  );
};

export default EditPage;
