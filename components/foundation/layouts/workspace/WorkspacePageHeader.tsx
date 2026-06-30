interface WorkspacePageHeaderProps {
  title: string;
  description?: string;
}

/** DWS.01 WorkingLayout PageHeader — title + subtitle block. */
export function WorkspacePageHeader({ title, description }: WorkspacePageHeaderProps) {
  return (
    <div className="border-b border-[var(--color-border-subtle)] bg-white px-6 py-5 lg:px-8">
      <h1 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h1>
      {description && (
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
      )}
    </div>
  );
}
