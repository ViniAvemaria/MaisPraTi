import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% { left: -150px; }
  100% { left: 100%; }
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
    max-width: 235px;
    padding: 1.2rem;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background-color: var(--card-bg);
    box-shadow: 0 2px 6px var(--shadow-color);
`;

const SkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
    height: 100%;
    width: 100%;
`;

const SkeletonBase = styled.div`
    width: 100%;
    height: 1.5rem;
    background: var(--skeleton-bg);
    position: relative;
    overflow: hidden;
    border-radius: 6px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -150px;
        height: 100%;
        width: 150px;
        background: linear-gradient(
            90deg,
            var(--shimmer-color-start) 0%,
            var(--shimmer-color-middle) 50%,
            var(--shimmer-color-end) 100%
        );
        animation: ${loading} 1.5s infinite;
    }

    @media (max-width: 768px) {
        height: 1.48rem;
    }

    @media (max-width: 480px) {
        height: 1.54rem;
    }
`;

const SkeletonImage = styled(SkeletonBase)`
    width: 200px;
    height: 200px;
    border-radius: 12px;
    margin-bottom: 2rem;
`;

const SkeletonText = styled(SkeletonBase)`
    &.rating {
        width: 40%;
    }

    &.short {
        width: 60%;
    }

    &.button {
        width: 45%;
        border-radius: 12px;
        margin-top: 2rem;
    }
`;

const StartAlign = styled.div`
    align-self: flex-start;
`;

function Skeleton() {
    return (
        <ProductCard>
            <SkeletonCard>
                <SkeletonImage />
                <SkeletonText className="rating" as={StartAlign} />
                <SkeletonText as={StartAlign} />
                <SkeletonText className="short" as={StartAlign} />
                <SkeletonText className="button" />
            </SkeletonCard>
        </ProductCard>
    );
}

export default Skeleton;
